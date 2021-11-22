import { Component, ViewChild } from '@angular/core';
import { TablaUsuarioConsultaComponent } from './components/tabla-usuario-consulta/tabla-usuario-consulta.component';

@Component({
    selector: 'usuario-consulta',
    templateUrl: './usuario-consulta.component.html',
    styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent {

    @ViewChild('tablaUsuarioConsulta') tablaUsuarioConsulta: TablaUsuarioConsultaComponent | undefined;

    filterAccordion: boolean = true;

    findUsuarioConsulta() {
        this.filterAccordion = false;
        if (!this.tablaUsuarioConsulta) return;
        this.tablaUsuarioConsulta.loading = true;
        setTimeout(() => {
            if (!this.tablaUsuarioConsulta) return;
            this.tablaUsuarioConsulta.loading = false;
        }, 2000);
    }

}