import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { UsersComponent } from "./components/users/users.component";

const ROUTES: Routes = [
    {
        path: '', component: MainComponent
    }, 
    {
        path: 'users', component: UsersComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)]
})
export class AppRouterModule {}