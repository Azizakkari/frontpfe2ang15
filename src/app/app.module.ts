import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header2Component } from './header2/header2.component';

import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestioncaisseformsComponent } from './gestioncaisseforms/gestioncaisseforms.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { LienutileComponent } from './lienutile/lienutile.component';
import { ListservicesComponent } from './listeservices/listeservices.component';
import { ListdirectionComponent } from './listdirection/listdirection.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Forms2Component } from './forms2/forms2.component';
@NgModule({
  declarations: [
    AppComponent,
    Header2Component,
    FooterComponent,
    ContactComponent,
    PresentationComponent,
    GallerieComponent,
    AcceuilcnstnComponent,
    GestioncaisseformsComponent,
    GestionuserComponent,
    LienutileComponent,
    ListservicesComponent,
    ListdirectionComponent,
    Forms2Component,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,RouterLinkActive,RouterOutlet,FormsModule,ReactiveFormsModule,HttpClientModule, MatListModule, MatDividerModule, MatButtonModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
