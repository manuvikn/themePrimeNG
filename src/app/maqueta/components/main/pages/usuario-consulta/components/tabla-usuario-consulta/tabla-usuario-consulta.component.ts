import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tabla-usuario-consulta',
    templateUrl: './tabla-usuario-consulta.component.html',
    styleUrls: ['./tabla-usuario-consulta.component.scss']
})
export class TablaUsuarioConsultaComponent implements OnInit {

    tableItems: Array<any> = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {

        this.loadRandomTableItems();

    }

    loadRandomTableItems() {

        this.http.get('/assets/data/users.json').toPromise()
            .then((data: any) => this.tableItems = data)
            .catch(err => new Error(err));

    }

}