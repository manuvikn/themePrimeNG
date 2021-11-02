import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'filtro-usuario-consulta',
    templateUrl: './filtro-usuario-consulta.component.html',
    styleUrls: ['./filtro-usuario-consulta.component.scss']
})
export class FiltroUsuarioConsultaComponent implements OnInit {

    depSelected: Array<string> = [];
    departamentos: any = {};
    depKeys: Array<any> = [];

    constructor() {}

    ngOnInit() {

        this.loadRandomDeps();
    }

    loadRandomDeps() {
        this.departamentos = {};
        for (let i = 0; i < 6 ; i++) {
            let dep: any = [];
            let depName = 'Departamento ' + (i + 1);
            for (let j = 0; j <5 ; j++) {
                let subDepName = 'Departamento ' + (i+1) + ' - ' + (j +1);
                dep.push(subDepName);
            }
            this.departamentos[depName] = dep;
        }
        this.depKeys = Object.keys(this.departamentos);
    }

}