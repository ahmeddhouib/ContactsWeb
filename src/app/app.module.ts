import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpModule} from '@angular/http';
import {ContactsService} from '../services/contacts.service';
import {FormsModule} from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';



//Routage et Navigation
const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent   // nom de la classe (ajouter automqtique avec ng )
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  //Routage et Navigation
    HttpModule,
    FormsModule
  ],
  providers: [ContactsService],   // providers contient les services
  bootstrap: [AppComponent]
})
export class AppModule { }  // AppModule ulise la décorateur NgModule
