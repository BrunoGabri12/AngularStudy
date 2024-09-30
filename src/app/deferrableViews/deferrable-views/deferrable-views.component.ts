import { Component } from '@angular/core';
import { ComponentTestComponent } from "../../shared/component-test/component-test.component";

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [ComponentTestComponent,ComponentTestComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.css'
})
export class DeferrableViewsComponent {
    isTrue = false;
}
