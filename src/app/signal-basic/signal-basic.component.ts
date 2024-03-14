import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal-basic',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './signal-basic.component.html',
  styleUrl: './signal-basic.component.scss'
})
export class SignalBasicComponent {
  
  // normal
  fName:string = "Sam";
  lName:string = "Altman"; 
  fullName:string = this.fName +' '+ this.lName;
  
  getName (a:string,type:string){
    if(type == 'fname'){
      this.fName = a;
    } else {
      this.lName = a;
    }
  }

    // signal
    fName1:any =  signal("Chat");
    lName1:any = signal("gpt"); 
    fullName1:any = computed(()=> this.fName1() + this.lName1());

    getName1 (a:any,type:string){
      if(type == 'fname'){
        this.fName1.set(a);
      } else {
        this.lName1.set(a);
      }
    }
}
