import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'collaborator', component: CollaboratorComponent },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
