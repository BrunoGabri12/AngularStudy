import { Component } from '@angular/core';
import { DeferrableViewsComponent } from "../study-topics/deferrable-views/deferrable-views.component";

@Component({
  selector: 'app-firts-page',
  standalone: true,
  imports: [DeferrableViewsComponent],
  templateUrl: './firts-page.component.html',
  styleUrl: './firts-page.component.css'
})
export class FirtsPageComponent {

}
