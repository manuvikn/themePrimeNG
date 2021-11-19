import { AfterViewInit, Component, Input, OnInit, Output, QueryList, ViewChildren, EventEmitter, ChangeDetectorRef, AfterContentChecked } from "@angular/core";
import { PageItemComponent } from "./components/page-component/page.component";

@Component({
    selector: 'custom-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit, AfterViewInit, AfterContentChecked{

    @Output() paginatorInfoEvent: EventEmitter<any> = new EventEmitter<any>();   // Evento que emite la información de la paginación al componente padre

    @Input() totalRecords: number = 0;    // Número total de elementos a paginar
    @Input() pageRegNumber: number = 0; // Número de registros que se muestran por página
    @Input() pageRegOptions: Array<number> = [5,10,15]; // Opciones para elegir cuantos registros mostrar por página
    first: number = 0; // Indice del primer registro paginado

    @ViewChildren('pageItem') pagesQueryList: QueryList<PageItemComponent> | undefined;
    pageElementFocus: PageItemComponent | undefined;
    
    numberPages: number = 0;    // Numéro de páginas
    numberPagesMax: number = 0; // Número máximo de páginas que se pueden mostrar, el máximo será 5
    indexPageFocus: number = 0  // Indice de la página seleccionada
    arrPagesVisibles: Array<number> = [];   // Array de botones con las páginas visibles en base a indexPageFocus   

    // State Buttons
    showBeforeButton: boolean = false;
    showAfterButton: boolean = false;
    
    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.cdr.detach();
        this.loadPages();
        this.loadPagesVisibles();        

    }

    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }

    ngAfterViewInit() {
        this.pageElementFocus = this.pagesQueryList?.get(this.indexPageFocus);
        this.pageElementFocus?.changeFocusState();
        this.changeButtonsState();
    }

    loadPages() {

        let numberPagesDeci = this.totalRecords / this.pageRegNumber;
        const arrNumberDeci = numberPagesDeci.toString().split('.');

        if (arrNumberDeci.length > 1) {
            numberPagesDeci++;
        }
        this.numberPages = Math.trunc(numberPagesDeci);
        this.numberPages > 5 ? this.numberPagesMax = 5 : this.numberPagesMax = this.numberPages;

    }

    loadPagesVisibles(emit = true) {

        this.arrPagesVisibles = [];

        let firstPage = 0;
        let lastPage = this.numberPages - 1;

        if ((this.indexPageFocus - 2) > 0 ) {
            firstPage = this.indexPageFocus - 2;
        }

        if ((firstPage + this.numberPagesMax) > this.numberPages) {
            firstPage = (this.numberPages - this.numberPagesMax);
        }

        lastPage = firstPage + this.numberPagesMax;

        for (let i = firstPage; i < lastPage; i++) {
            this.arrPagesVisibles.push(i);
        }

        this.changeButtonsState();

        if (emit) this.emitPaginatorInfo();
        
    }

    changeFocusPageIndex(page: PageItemComponent | undefined) {
        if (page) {
            this.pageElementFocus?.changeFocusState();
            page.changeFocusState();
            this.pageElementFocus = page;
            this.indexPageFocus = page.pageValue;
            this.first = this.pageRegNumber * page.pageValue;
            this.loadPagesVisibles();
            
        }
    }

    pageBefore() {
        if (this.showBeforeButton && this.pagesQueryList) {
            this.indexPageFocus -= 1;
            const pageItemBefore = this.pagesQueryList.filter(item => item['pageValue'] === this.indexPageFocus);
            
            this.changeFocusPageIndex(pageItemBefore[0]);
        }
    }

    firstPage() {
        if (this.showBeforeButton && this.pagesQueryList) {
            this.indexPageFocus = 0;
            this.loadPagesVisibles(false);
            
            setTimeout(() => {
                if (this.showBeforeButton && this.pagesQueryList) {
                    const pageItem = this.pagesQueryList.filter(item => item['pageValue'] === this.indexPageFocus);
                    this.changeFocusPageIndex(pageItem[0]);
                }
                
            });
        }
    }

    pageAfter() {
        if (this.showAfterButton && this.pagesQueryList) {
            this.indexPageFocus += 1;
            const pageItemBefore = this.pagesQueryList.filter(item => item['pageValue'] === this.indexPageFocus);
            
            this.changeFocusPageIndex(pageItemBefore[0]);
        }
    }

    lastPage() {
        if (this.showAfterButton && this.pagesQueryList) {
            this.indexPageFocus = this.numberPages - 1;
            this.loadPagesVisibles(false);
            
            setTimeout(() => {
                if (this.showAfterButton && this.pagesQueryList) {
                    const pageItem = this.pagesQueryList.filter(item => item['pageValue'] === this.indexPageFocus);
                    this.changeFocusPageIndex(pageItem[0]);
                }
                
            });
        }
    }

    messageShowing() {
        console.log(`Mostrando ${this.first + 1} - ${this.first + this.pageRegNumber} de ${this.totalRecords} elementos`);
    }

    emitPaginatorInfo() {
        const paginatorInfo = {
            totalRecords: this.totalRecords,
            pageRegNumber: this.pageRegNumber,
            first: this.first,
            numberPages: this.numberPages,
            indexPagesFocus: this.indexPageFocus
        }
        this.paginatorInfoEvent.emit( paginatorInfo );
    }

    changeButtonsState() {
        this.pageElementFocus?.pageValue === 0 ? this.showBeforeButton = false : this.showBeforeButton = true;
        this.pageElementFocus?.pageValue === (this.numberPages - 1) ? this.showAfterButton = false : this.showAfterButton = true;        
    }

}