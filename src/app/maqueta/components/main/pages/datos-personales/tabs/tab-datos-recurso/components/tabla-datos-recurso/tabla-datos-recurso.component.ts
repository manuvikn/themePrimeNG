import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tabla-datos-recurso',
    templateUrl: './tabla-datos-recurso.component.html',
    styleUrls: ['./tabla-datos-recurso.component.scss']
})
export class TablaDatosRecursoComponent implements OnInit{

    datosRecursos: Array<any> = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {

        this.http.get('/assets/data/datosRecurso.json')
            .subscribe((data:any) => this.datosRecursos = data);

    }

}