import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaquetaModule } from './maqueta/maqueta.module';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { PrimeNgModule } from './primeNG/primeng.module';
import { CustomPaginatorModule } from './paginator/paginator.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaquetaModule,
    PrimeNgModule,
    CustomPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
