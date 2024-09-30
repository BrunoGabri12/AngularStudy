import { Component } from '@angular/core';
import { ComponentTestComponent } from "../../shared/component-test/component-test.component";
import { Highlight } from 'ngx-highlightjs';
@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [ComponentTestComponent,ComponentTestComponent, Highlight],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.css'
})
export class DeferrableViewsComponent {
    isTrue = false;

    deferCode = ` 
    @defer(){
        "componente a ser carregado" 
    } @placeholder(){
        "Mensagem pré carregamento"
    } @loading() {
        "alguma alternativa quando estiver carregando"
    } @error { 
        "mensagem de erro"
    }`
}
