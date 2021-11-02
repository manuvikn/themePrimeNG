import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeNG/primeng.module";
import { MaquetaMainComponent } from "./components/main/main.component";
import { FiltroUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/filtro-usuario-consulta/filtro-usuario-consulta.component";
import { InfoUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/info-usuario-consulta/info-usuario-consulta.component";
import { TablaUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/tabla-usuario-consulta/tabla-usuario-consulta.component";
import { UsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/usuario-consulta.component";


@NgModule({
    declarations: [
        MaquetaMainComponent,
        UsuarioConsultaComponent,
        InfoUsuarioConsultaComponent,
        FiltroUsuarioConsultaComponent,
        TablaUsuarioConsultaComponent
    ], 
    imports: [
        CommonModule,
        PrimeNgModule,
        FormsModule
    ],
    exports: [
        MaquetaMainComponent
    ],
    providers: []
})
export class MaquetaModule {}