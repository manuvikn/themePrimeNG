import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
    
    items: MenuItem[] = [];

    constructor() {}

    ngOnInit() {
       this.items = [
           {
               label:'Home',
               icon:'pi pi-home',
               routerLink: '/',
                routerLinkActiveOptions: {exact:true}
           },
           {
                label: 'Users',
                icon: 'pi pi-user',
                routerLink: 'users',
                routerLinkActiveOptions: {exact:true}
           }
       ];
   }


}