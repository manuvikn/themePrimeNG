import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { TablaDepDelegadosFilter } from "src/app/maqueta/models/tabla-dep-delegados.filter";

@Injectable({
    providedIn: 'root'
})
export class TablaDepDelegadosService {

    constructor(private http: HttpClient) {}

    getDatosDepDelegados(filter: TablaDepDelegadosFilter) {
        
        return this.http.get('/assets/data/depDelegados.json')
            .pipe(
                map(async (data:any) => {
                    let response: any = {};
                    response['totalRecords'] = data.length;
                    data = await this.sortData(data, filter);
                    data = data.slice(filter.first, (filter.first + filter.rows));
                    response['data'] = data;
                    return response;
                })
            )

    }

    async sortData(arrData: Array<any>, filter: TablaDepDelegadosFilter): Promise<Array<any>> {

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

}