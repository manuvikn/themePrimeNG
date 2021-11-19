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
import {ScrollTopModule} from 'primeng/scrolltop';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MultiSelectModule} from 'primeng/multiselect';
import {RippleModule} from 'primeng/ripple';


@NgModule({
    declarations: [],
    imports: [CommonModule],
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
        ToastModule,
        ScrollTopModule,
        OverlayPanelModule,
        MultiSelectModule,
        RippleModule
    ],
    providers: [],
})
export class PrimeNgModule {}