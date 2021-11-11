import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrimeNgModule } from "../primeNG/primeng.module";
import { MaquetaMainComponent } from "./components/main/main.component";
import { DatosPersonalesComponent } from "./components/main/pages/datos-personales/datos-personales.component";
import { TabDatosPerfilComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-perfil/tab-datos-perfil.component";
import { TablaDepDelegadosComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-perfil/tabs/tab-perfil-departamental/components/tabla-dep-delegados/tabla-dep-delegados.component";
import { TabPerfilDepartamentalComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-perfil/tabs/tab-perfil-departamental/tab-perfil-departamental.component";
import { TabDatosPersonalesComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-personales/tab-datos-personales.component";
import { FiltroDatosRecursoComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-recurso/components/filtro-datos-recurso/filtro-datos-recurso.component";
import { TablaDatosRecursoComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-recurso/components/tabla-datos-recurso/tabla-datos-recurso.component";
import { TabDatosRecursoComponent } from "./components/main/pages/datos-personales/tabs/tab-datos-recurso/tab-datos-recurso.component";
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
        TabDatosPersonalesComponent,
        TabDatosPerfilComponent,
        TabPerfilDepartamentalComponent,
        TablaDepDelegadosComponent,
        TabDatosRecursoComponent,
        TablaDatosRecursoComponent,
        FiltroDatosRecursoComponent
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