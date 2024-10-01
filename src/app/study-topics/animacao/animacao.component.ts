import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-animacao',
  standalone: true,
  imports: [],
  templateUrl: './animacao.component.html',
  styleUrl: './animacao.component.css',
  animations: [
    trigger('move-ball', [
      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),
      state('move-right', style({
        transform: 'scale(0.7) translateX(300px) rotate(180deg)'
      })),
      transition('* => move-rigth', [animate('1s 0.5s ease-in', keyframes([
       style({
        opacity: 0,
        transform: 'scale(1) translateX(0px) rotate(0deg)'
       }),
       style({ 
        opacity: 0.5,
        transform: 'scale(0.8) translateX(150px) rotate(180deg)'
      }),
       style(
        { 
          opacity: 1,
          transform: 'scale(0.7) translateX(300px) rotate(360deg)'
        }
      )
      ]))]),
      transition('* => move-rigth', animate('1s 0.5s ease-in')),
      transition('* => move-left', animate('1s 0.5s ease-in'))
    ])
  ]
})
export class AnimacaoComponent {
  public moveIn = signal('move-left') 
}
