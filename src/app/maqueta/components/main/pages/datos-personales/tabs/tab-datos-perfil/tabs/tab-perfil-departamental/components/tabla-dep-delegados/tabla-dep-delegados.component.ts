import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { TablaDepDelegadosFilter } from "src/app/maqueta/models/tabla-dep-delegados.filter";
import { TablaDepDelegadosService } from "../../../../services/tabla-dep-delegados.service";

@Component({
    selector: 'tabla-dep-delegados',
    templateUrl: './tabla-dep-delegados.component.html',
    styleUrls: ['./tabla-dep-delegados.component.scss']
})
export class TablaDepDelegadosComponent implements OnInit{

    depDelegados: Array<any> = [];

    loading: boolean = false;
    tablaDepDelegadosFilter: TablaDepDelegadosFilter = new TablaDepDelegadosFilter();
    totalRecords: number = 0;

    constructor(private tablaDepDelegadosService: TablaDepDelegadosService) {}

    ngOnInit() {
        this.loading = true;
    }

    loadDatosDepDelegados(event: LazyLoadEvent) {
        
        this.loading = true;
        this.tablaDepDelegadosFilter.convertToDatosDepFilter(event);
        this.tablaDepDelegadosService.getDatosDepDelegados(this.tablaDepDelegadosFilter)
            .subscribe( (data) => {
                data.then(response => {
                    this.depDelegados = response.data;
                    this.totalRecords = response.totalRecords;
                    this.loading = false;
                });
            });
    }

}