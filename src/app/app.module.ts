import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Forms2Component } from './forms2/forms2.component';
import { ListesalleComponent } from './listesalle/listesalle.component';
import { ListequipemetComponent } from './listequipemet/listequipemet.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListereservationComponent } from './listereservation/listereservation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';


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
    ListesalleComponent,
    ListequipemetComponent,
    ListecategorieComponent,
    ListereservationComponent,
    LoginComponent,
    RegisterComponent,
    AdmintemplateComponent,
    NotauthorizedComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,RouterLinkActive,RouterOutlet,FormsModule,ReactiveFormsModule,HttpClientModule, MatListModule, MatDividerModule, MatButtonModule, MatToolbarModule , MatCardModule,
    MatFormFieldModule,MatNativeDateModule,MatPseudoCheckboxModule, MatInputModule  ,  CommonModule,
    ],
  providers: [{
 provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
