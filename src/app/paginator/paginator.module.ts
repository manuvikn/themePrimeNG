import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageItemComponent } from "./components/page-component/page.component";
import { CustomPaginatorComponent } from "./paginator.component";
import { PrimeNgModule } from "./primeNG/primeng.module";

@NgModule({
    declarations: [
        CustomPaginatorComponent,
        PageItemComponent
    ],
    imports: [
        CommonModule,
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CustomPaginatorComponent
    ],
    providers: []
})
export class CustomPaginatorModule {}