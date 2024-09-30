import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferrableViewsComponent } from "./deferrableViews/deferrable-views/deferrable-views.component";
import { SignalComponent } from "./signal/signal.component";
import { FormsComponent } from "./forms/forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeferrableViewsComponent, SignalComponent, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'projeto-estudo';

  resposta = signal('')


}
