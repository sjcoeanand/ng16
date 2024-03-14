import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  topics:any[]=[
  {
    path:'signal-basic',
    name: 'Signal'
  },
  {
    path:'projects',
    name: 'Project'
  }];
}
