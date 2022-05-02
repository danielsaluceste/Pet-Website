import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoacaoComponent } from './doacao/doacao.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'doacao', component : DoacaoComponent},
  {path : 'sobre', component : SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
