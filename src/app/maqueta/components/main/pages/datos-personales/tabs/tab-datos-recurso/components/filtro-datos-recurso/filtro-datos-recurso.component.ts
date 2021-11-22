import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'filtro-datos-recurso',
    templateUrl: './filtro-datos-recurso.component.html',
    styleUrls: ['./filtro-datos-recurso.component.scss']
})
export class FiltroDatosRecursoComponent implements OnInit{

    tipoRecurso: string = '';
    inputAplicacion: string = '';
    tiposRecursos: Array<any> = [];
    checkAplicacionesSelect: Array<any> = [];
    checkAplicaciones: Array<any> = [];


    ngOnInit() {

        this.loadTiposRecursos();
        this.loadCheckAplicaciones();

    }

    loadTiposRecursos() {
        for (let i = 0; i < 8; i++) {
            const recurso = {
                name: `Aplciaciones del Portal Prosa de la Intranet ${i + 1}`,
                code: `recurso${i+1}`
            };
            this.tiposRecursos.push(recurso);
        }

    }

    loadCheckAplicaciones() {

        for (let i = 0; i < 45; i++) {

            this.checkAplicaciones.push({
                code: `value${i+1}`,
                name: `Aplicacion ${i+1}`
            });
        }

    }

    refreshInputAplicacion() {

        this.inputAplicacion = '';
        this.checkAplicacionesSelect.forEach(({name}, index) => {
            this.inputAplicacion += name + (index !== this.checkAplicacionesSelect.length - 1 ? ', ' : '');
        });

    }
}