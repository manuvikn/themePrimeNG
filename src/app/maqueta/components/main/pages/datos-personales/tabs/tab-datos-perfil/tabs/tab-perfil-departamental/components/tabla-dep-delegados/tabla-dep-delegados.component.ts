import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tabla-dep-delegados',
    templateUrl: './tabla-dep-delegados.component.html',
    styleUrls: ['./tabla-dep-delegados.component.scss']
})
export class TablaDepDelegadosComponent implements OnInit{

    depDelegados: Array<any> = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadDepDelegados();
    }

    loadDepDelegados() {
        this.http.get('/assets/data/depDelegados.json')
            .subscribe((data: any) => this.depDelegados = data);
    }

}