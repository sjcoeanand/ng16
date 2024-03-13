import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal-basic',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './signal-basic.component.html',
  styleUrl: './signal-basic.component.scss'
})
export class SignalBasicComponent {

  fullName:any;
  
}
