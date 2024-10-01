import { Component } from '@angular/core';
import { DeferrableViewsComponent } from "../study-topics/deferrable-views/deferrable-views.component";
import { SignalComponent } from '../study-topics/signal/signal.component';
import { OtimizacaoImagensComponent } from '../study-topics/otimizacao-imagens/otimizacao-imagens.component';
import { AnimacaoComponent } from '../study-topics/animacao/animacao.component';
import { TestesComponent } from '../study-topics/testes/testes/testes.component';
import { SsrComponent } from '../study-topics/ssr/ssr.component';

@Component({
  selector: 'app-firts-page',
  standalone: true,
  imports: [DeferrableViewsComponent, SignalComponent, OtimizacaoImagensComponent, AnimacaoComponent, TestesComponent,SsrComponent],
  templateUrl: './firts-page.component.html',
  styleUrl: './firts-page.component.css'
})
export class FirtsPageComponent {
  public tab = 1;

}