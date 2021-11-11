import { Component, OnInit, ViewChild } from "@angular/core";
import { LazyLoadEvent } from "primeng/api";
import { TablaDatosRecursoFilter } from "src/app/maqueta/models/tabla-datos-recurso.filter";
import { TablaDatosRecursoService } from "../../services/tabla-datos-recurso.service";

@Component({
    selector: 'tabla-datos-recurso',
    templateUrl: './tabla-datos-recurso.component.html',
    styleUrls: ['./tabla-datos-recurso.component.scss']
})
export class TablaDatosRecursoComponent implements OnInit{

    @ViewChild('table') table: any;
    datosRecursos: Array<any> = [];
    totalRecords: number = 0;
    loading: boolean = false;
    tablaDatosRecursoFilter: TablaDatosRecursoFilter = new TablaDatosRecursoFilter();

    // Filter fields
    filterTran: string = '';
    filterGrupo: string = '';
    filterServ: string = '';

    constructor(private tablaDatosRecursoService: TablaDatosRecursoService) {}

    ngOnInit() {
        this.loading = true;
    }

    loadDatosRecurso(event: LazyLoadEvent) {
        
        this.loading = true;
        this.tablaDatosRecursoFilter.convertToDatosRecursoFilter(event);
        this.tablaDatosRecursoService.getDatosRecurso(this.tablaDatosRecursoFilter)
            .subscribe( (data) => {
                data.then(response => {
                    this.datosRecursos = response.data;
                    this.totalRecords = response.totalRecords;
                    this.loading = false;
                });
            });
    }

    tableFilter(target: any) {
        this.table.filterGlobal(target?.value, 'contains');
    }

    filterField(field: string, filter:string) {
        this.table.filter(filter, field, 'contains');
    }

}