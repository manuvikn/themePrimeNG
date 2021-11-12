import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { TablaUsuarioConsultaFilter } from "src/app/maqueta/models/tabla-usuario-consulta.filter";
import { TablaUsuarioConsultaService } from "../../services/tabla-usuario-consulta.service";

@Component({
    selector: 'tabla-usuario-consulta',
    templateUrl: './tabla-usuario-consulta.component.html',
    styleUrls: ['./tabla-usuario-consulta.component.scss']
})
export class TablaUsuarioConsultaComponent implements OnInit {

    tableItems: Array<any> = [];

    loading: boolean = false;
    tablaUsuarioConFilter: TablaUsuarioConsultaFilter = new TablaUsuarioConsultaFilter();
    totalRecords: number = 0;
    
    constructor(private tablaUsuarioConService: TablaUsuarioConsultaService, 
            private router: Router) {}

    ngOnInit() {
        this.loading = true;
    }

    loadDatosUsuarioCon(event: LazyLoadEvent) {
        
        this.loading = true;
        this.tablaUsuarioConFilter.convertToDatosUsuarioConFilter(event);
        this.tablaUsuarioConService.getDatosDepDelegados(this.tablaUsuarioConFilter)
            .subscribe( (data) => {
                data.then(response => {
                    this.tableItems = response.data;
                    this.totalRecords = response.totalRecords;
                    this.loading = false;
                });
            });
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