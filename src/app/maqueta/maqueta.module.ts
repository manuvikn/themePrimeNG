import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeNG/primeng.module";
import { MaquetaMainComponent } from "./components/main/main.component";
import { DatosPersonalesComponent } from "./components/main/pages/datos-personales/datos-personales.component";
import { TabDatosPersonalesComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-personales/tab-datos-personales.component";
import { FiltroUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/filtro-usuario-consulta/filtro-usuario-consulta.component";
import { InfoUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/info-usuario-consulta/info-usuario-consulta.component";
import { TablaUsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/components/tabla-usuario-consulta/tabla-usuario-consulta.component";
import { UsuarioConsultaComponent } from "./components/main/pages/usuario-consulta/usuario-consulta.component";
import { MaquetaRouterModule } from "./router.maqueta.module";


@NgModule({
    declarations: [
        MaquetaMainComponent,
        UsuarioConsultaComponent,
        InfoUsuarioConsultaComponent,
        FiltroUsuarioConsultaComponent,
        TablaUsuarioConsultaComponent,
        DatosPersonalesComponent,
        TabDatosPersonalesComponent
    ], 
    imports: [
        CommonModule,
        MaquetaRouterModule,
        PrimeNgModule,
        FormsModule
    ],
    exports: [
        MaquetaMainComponent
    ],
    providers: []
})
export class MaquetaModule {}