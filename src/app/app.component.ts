import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferrableViewsComponent } from "./study-topics/deferrable-views/deferrable-views.component";
import { SignalComponent } from "./study-topics/signal/signal.component";
import { FirtsPageComponent } from "./firts-page/firts-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeferrableViewsComponent, SignalComponent, FirtsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'projeto-estudo';

  resposta = signal('')


}
