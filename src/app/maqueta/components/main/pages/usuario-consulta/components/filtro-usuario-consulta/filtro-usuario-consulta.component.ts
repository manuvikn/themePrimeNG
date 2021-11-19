import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'filtro-usuario-consulta',
    templateUrl: './filtro-usuario-consulta.component.html',
    styleUrls: ['./filtro-usuario-consulta.component.scss']
})
export class FiltroUsuarioConsultaComponent implements OnInit {

    depSelected: Array<string> = [];
    departamentos: any = {};
    depKeys: Array<any> = [];

    // dropdowns
    usuarioDropDown: Array<any> = [
        {name: 'Nombre', code: 'nombre'},
        {name: 'Dni', code: 'dni'},
        {name: 'Identificador', code: 'id'},
    ];
    tipoDropDown: Array<any> = [
        {name: 'Recurso', code: 'recurso'},
        {name: 'Aplicación', code: 'aplicacion'},
        {name: 'Rol', code: 'rol'},
        {name: 'Grupo', code: 'grupo'},
    ];
    usuarioDropSelected: any;
    tipoDropSelected: any;

    selectedDeps: TreeNode[] | undefined;
    depNodes: TreeNode[] = [];
    newDepartamentos: TreeNode[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {

        this.loadRandomDeps();
        this.loadJsonDeps();
    }

    loadRandomDeps() {
        this.departamentos = {};
        for (let i = 0; i < 6 ; i++) {
            const dep: any = [];
            const depName = 'Departamento ' + (i + 1);
            for (let j = 0; j <5 ; j++) {
                const subDepName = 'Departamento ' + (i+1) + ' - ' + (j +1);
                dep.push(subDepName);
            }
            this.departamentos[depName] = dep;
        }
        this.depKeys = Object.keys(this.departamentos);
    }

    loadJsonDeps() {

        this.http.get('/assets/data/nodeDepartamentos.json').toPromise()
            .then(({data}:any) => {
                this.depNodes = data;
                this.newDepartamentos = [...data];
            })
            .catch(err => new Error(err));

    }

    nodeSelect(event: any) {
        console.log(event);
        console.log(this.selectedDeps);
        
    }

    searchDep(inputDep: string) {
        
        /* if (this.depNodes != []) {
            inputDep = inputDep.toLowerCase().trim();
            
            this.newDepartamentos = [];
            this.depNodes.forEach((item: any) => {
                
                const label = item['label'].toLowerCase().trim();
                if (label.includes(inputDep)) {
                    this.newDepartamentos.push({...item});
                } else {
                    let breakLoop = false;
                    let count = 0;
                    while (!breakLoop && count < item['children'].length) {
                        
                        const subDep = item.children[count];
                        
                        const labelChil = subDep['label'].toLowerCase().trim();
                        if (labelChil.includes(inputDep)) {
                            
                            this.newDepartamentos.push({...item});
                            this.newDepartamentos[this.newDepartamentos.length - 1].expanded = true;
                            breakLoop = true;
                        }
                        count ++;
                    }
                }
            });

        } */

        if (this.depNodes != []) {
            inputDep = inputDep.toLowerCase().trim();
            
            this.newDepartamentos = [];
            this.depNodes.forEach((item: any) => {
                
                const label = item['label'].toLowerCase().trim();
                if (label.includes(inputDep)) {
                    this.newDepartamentos.push(item);
                } else {
                    let breakLoop = false;
                    let count = 0;
                    while (!breakLoop && count < item['children'].length) {
                        
                        const subDep = item.children[count];
                        
                        const labelChil = subDep['label'].toLowerCase().trim();
                        if (labelChil.includes(inputDep)) {
                            
                            this.newDepartamentos.push(item);
                            this.newDepartamentos[this.newDepartamentos.length - 1].expanded = true;
                            breakLoop = true;
                        }
                        count ++;
                    }
                }
            });

        }
    }

    unSelectNode(event: any): any {
        
        if (!event.node?.children || !this.selectedDeps) return;        

        const nodeChildrenArr = event.node.children;
        const allNodes: TreeNode[] = [];
        let allSelect = true;
        this.selectedDeps.push(event.node);
        const parentNodeIndex = this.selectedDeps.length - 1;

        for (let i = 0; i < nodeChildrenArr.length; i++) {
            if (!this.selectedDeps.includes(nodeChildrenArr[i])) {
                allSelect = false;
                allNodes.push(nodeChildrenArr[i]);
            }
        }

        if (!allSelect) {
            this.selectedDeps.push(...allNodes);
        } else {
            this.selectedDeps.splice(parentNodeIndex, 1);
            for (let i = 0; i < nodeChildrenArr.length; i++) {
                const index = this.selectedDeps.indexOf(nodeChildrenArr[i]);
                if (index != -1) this.selectedDeps.splice(index, 1);
            }
            
        }
    }

}