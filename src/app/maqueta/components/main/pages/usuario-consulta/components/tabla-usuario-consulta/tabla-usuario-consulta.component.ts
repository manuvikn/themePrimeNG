import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'tabla-usuario-consulta',
    templateUrl: './tabla-usuario-consulta.component.html',
    styleUrls: ['./tabla-usuario-consulta.component.scss']
})
export class TablaUsuarioConsultaComponent implements OnInit {

    tableItems: Array<any> = [];
    
    constructor(private http: HttpClient, 
            private router: Router) {}

    ngOnInit() {

        this.loadRandomTableItems();
    }

    loadRandomTableItems() {

        this.http.get('/assets/data/users1.json').toPromise()
            .then((data: any) => this.tableItems = data)
            .catch(err => new Error(err));

    }

    navigateToPersonalData(id: string, page: number) {
        this.router.navigateByUrl(`datos-personales/${id}`, {state: {'page': page}});
    }

    mostrarVer(event: any, op: any) {
        try {
            op.toggle(event);
        } catch(err) {
            console.log(err);
        }
    }

}