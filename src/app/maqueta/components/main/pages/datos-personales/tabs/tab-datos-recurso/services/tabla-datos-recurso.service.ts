import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { TablaDatosRecursoFilter } from "src/app/maqueta/models/tabla-datos-recurso.filter";

@Injectable({
    providedIn: 'root'
})
export class TablaDatosRecursoService {

    constructor( private http: HttpClient ) {}

    getDatosRecurso(filter: TablaDatosRecursoFilter) {
        
        return this.http.get('/assets/data/datosRecurso.json')
            .pipe(
                map(async (data:any) => {
                    let response: any = {};
                    data = await this.filterData(data, filter);
                    response['totalRecords'] = data.length;
                    data = await this.sortData(data, filter);
                    data = data.slice(filter.first, (filter.first + filter.rows));
                    response['data'] = data;
                    return response;
                })
            )

    }

    async sortData(arrData: Array<any>, filter: TablaDatosRecursoFilter): Promise<Array<any>> {

        if (!filter.sortField) return arrData;

        const sortOrder = filter.sortOrder;
        const sortField = filter.sortField;
        let sortArrData = [];

        if (sortOrder == 1) {
            sortArrData = arrData.sort(function (a, b) {
                if (a[sortField] > b[sortField]) {
                  return 1;
                }
                if (a[sortField] < b[sortField]) {
                  return -1;
                }
                return 0;
              });
        } else {
            sortArrData = arrData.sort(function (a, b) {
                if (a[sortField] < b[sortField]) {
                  return 1;
                }
                if (a[sortField] > b[sortField]) {
                  return -1;
                }
                return 0;
              });
        }

        return sortArrData;

    }

    async filterData(arrData: Array<any>, filter: TablaDatosRecursoFilter): Promise<Array<any>> {

        if (!filter.filters) return arrData;

        const filterKeys = Object.keys(filter.filters);
        const filterObj = filter.filters;
        const arrDataResult = arrData.filter((itemData: any) => {

            let itemFiltered = true;

            for (let i = 0; i < filterKeys.length; i++) {

                let filterObjValue = filterObj[filterKeys[i]].value;
                if (filterObjValue && !itemData[filterKeys[i]].toLowerCase().includes(filterObjValue.toLowerCase())) {
                    itemFiltered = false;
                }

            }

            return itemFiltered;

        });
        
        return arrDataResult;
    }

}