import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule
    ],
    exports: [
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule
    ],
    providers: [],
})
export class PrimeNgModule {}