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
import {TreeModule} from 'primeng/tree';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';

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
        AccordionModule,
        TreeModule,
        TabViewModule,
        DropdownModule,
        ToastModule
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
        AccordionModule,
        TreeModule,
        TabViewModule,
        DropdownModule,
        ToastModule
    ],
    providers: [],
})
export class PrimeNgModule {}