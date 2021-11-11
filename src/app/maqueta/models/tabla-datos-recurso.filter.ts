
interface filters {
    [key: string] : {
        value: any,
        matchMode: string
    }
}

export class TablaDatosRecursoFilter {
    
    public filters: filters | null = null;
    public first: number = 0;
    public rows: number = 0;
    public sortField: string | null = null;
    public sortOrder: number | null = null;
    
    constructor() {}

    convertToDatosRecursoFilter(data: any) {

        this.filters = data.filters ? data.filters : null;
        this.first = data.first ? data.first : 0;
        this.rows = data.rows ? data.rows : 0;
        this.sortField = data.sortField ? data.sortField : null;
        this.sortOrder = data.sortOrder ? data.sortOrder : null;
        
    }

}