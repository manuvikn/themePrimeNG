import { Component, ViewChild } from '@angular/core';
import { TablaDatosRecursoComponent } from './components/tabla-datos-recurso/tabla-datos-recurso.component';

@Component({
    selector: 'tab-datos-recurso',
    templateUrl: './tab-datos-recurso.component.html',
    styleUrls: ['./tab-datos-recurso.component.scss']
})
export class TabDatosRecursoComponent {

    @ViewChild('tablaDatosRecursos') tablaDatosRecursos: TablaDatosRecursoComponent | undefined;

    filterAccordion: boolean = true;

    findDatosRecursos() {
        this.filterAccordion = false;
        if (!this.tablaDatosRecursos) return;
        this.tablaDatosRecursos.loading = true;
        setTimeout(() => {
            if (!this.tablaDatosRecursos) return;
            this.tablaDatosRecursos.loading = false;
        }, 2000);
    }

}