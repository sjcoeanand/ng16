import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component : PortfolioComponent
  },
  {
    path : 'projects',
    component : ProjectsComponent
  },
  {
    path: '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
