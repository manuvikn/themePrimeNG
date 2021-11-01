import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';


@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        CardModule
    ],
    exports: [
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        CardModule
    ],
    providers: [],
})
export class PrimeNgModule {}