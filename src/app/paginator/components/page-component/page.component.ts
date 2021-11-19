import { ChangeDetectorRef, Component, Input } from "@angular/core";


@Component({
    selector: 'page-item',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageItemComponent {

    @Input() pageValue: number = 0;
    pageFocus: boolean = false;

    constructor(private cdr: ChangeDetectorRef) {}

    changeFocusState() {
        this.cdr.detach();
        this.pageFocus = !this.pageFocus;
        this.cdr.detectChanges();
    }

}