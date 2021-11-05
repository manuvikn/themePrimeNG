import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tab-datos-recurso',
    templateUrl: './tab-datos-recurso.component.html',
    styleUrls: ['./tab-datos-recurso.component.scss']
})
export class TabDatosRecursoComponent implements OnInit{

    tipoRecurso: string = '';
    tiposRecursos: Array<any> = [];

    constructor() {}

    ngOnInit() {

        this.loadTiposRecursos();

    }

    loadTiposRecursos() {
        for (let i = 0; i < 8; i++) {
            let recurso = {
                name: `Aplciaciones del Portal Prosa de la Intranet ${i + 1}`,
                code: `recurso${i+1}`
            }
            this.tiposRecursos.push(recurso);
        }

    }

}