import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule
    ],
    exports: [
        MenubarModule,
        InputTextModule,
        ButtonModule
    ],
    providers: [],
})
export class PrimeNgModule {}