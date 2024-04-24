import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestioncaisseformsComponent } from './gestioncaisseforms/gestioncaisseforms.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { LienutileComponent } from './lienutile/lienutile.component';
import { ListservicesComponent } from './listeservices/listeservices.component';
import { ListdirectionComponent } from './listdirection/listdirection.component';
import { Forms2Component } from './forms2/forms2.component';


const routes: Routes = [

  {path: 'presentation', component: PresentationComponent},
  {path:'mesforms', component : Forms2Component},
  {path: 'contact', component:ContactComponent},
  {path: 'gallerie', component: GallerieComponent},
 {path: 'acceuilcnstn',component:AcceuilcnstnComponent},
 {path: 'gestioncaisse',component:GestioncaisseformsComponent},
 {path: 'gestionusers',component:GestionuserComponent},
 {path: 'lienutile', component:LienutileComponent},
 {path: 'gestionservices', component:ListservicesComponent},
 {path:'gestiondirections', component : ListdirectionComponent},
 {path: '', component:AcceuilcnstnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
