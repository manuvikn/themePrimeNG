import { Component } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
    selector: 'tab-datos-personales',
    templateUrl: './tab-datos-personales.component.html',
    styleUrls: ['./tab-datos-personales.component.scss'],
    providers: [MessageService]
})
export class TabDatosPersonalesComponent {

    identificadores: Array<any> = [
        {name: 'Identificador 1', code: 'id1'},
        {name: 'Identificador 2', code: 'id2'},
        {name: 'Identificador 3', code: 'id3'},
    ];

    identificadorSel: any = {name: 'Identificador 1', code: 'id1'};
    identificadorSelCp: any;
    constructor(private messageService: MessageService) {}

    showConfirm() {
        
        this.messageService.clear();
        this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Se va a proceder a modificar el identificador del usuario', detail:'Confirma para guardar los cambios'});
    }

    onConfirm() {
        this.messageService.clear('c');
    }

    onReject() {
        this.messageService.clear('c');
        this.identificadorSel = this.identificadorSelCp;
    }

    saveOption() {
        this.identificadorSelCp = this.identificadorSel;
    }

}