import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel'
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        CardModule,
        PanelModule,
        FieldsetModule,
        CheckboxModule,
        AccordionModule
    ],
    exports: [
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        CardModule,
        PanelModule,
        FieldsetModule,
        CheckboxModule,
        AccordionModule
    ],
    providers: [],
})
export class PrimeNgModule {}