import { Component } from '@angular/core';
import { DeferrableViewsComponent } from "../study-topics/deferrable-views/deferrable-views.component";
import { SignalComponent } from '../study-topics/signal/signal.component';

@Component({
  selector: 'app-firts-page',
  standalone: true,
  imports: [DeferrableViewsComponent, SignalComponent],
  templateUrl: './firts-page.component.html',
  styleUrl: './firts-page.component.css'
})
export class FirtsPageComponent {

  public page:pages = 1
  

  public changePage(tab: number) { 
    this.page = tab
    console.log(this.page)
  }
}


const enum pages  { 
  deferrable = 1,
  signals = 2,

} 