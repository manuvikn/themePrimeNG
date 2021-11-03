import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TreeNode } from "primeng/api";

@Component({
    selector: 'filtro-usuario-consulta',
    templateUrl: './filtro-usuario-consulta.component.html',
    styleUrls: ['./filtro-usuario-consulta.component.scss']
})
export class FiltroUsuarioConsultaComponent implements OnInit {

    depSelected: Array<string> = [];
    departamentos: any = {};
    depKeys: Array<any> = [];

    selectedDeps: TreeNode | undefined;
    depNodes: TreeNode[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {

        this.loadRandomDeps();
        this.loadJsonDeps();
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

    loadJsonDeps() {

        this.http.get('/assets/data/nodeDepartamentos.json').toPromise()
            .then(({data}:any) => this.depNodes = data)
            .catch(err => new Error(err));

    }

    nodeSelect(event: any) {
        console.log(event);
        console.log(this.selectedDeps);
        
    }

}