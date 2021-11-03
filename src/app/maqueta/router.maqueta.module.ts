import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioConsultaComponent } from './components/main/pages/usuario-consulta/usuario-consulta.component';
import { DatosPersonalesComponent } from './components/main/pages/datos-personales/datos-personales.component';

const routes: Routes = [
    { path: '', component: UsuarioConsultaComponent },
    { path: 'datos-personales/:id', component: DatosPersonalesComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MaquetaRouterModule {}
