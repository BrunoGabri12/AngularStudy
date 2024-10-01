import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
@Component({
  selector: 'app-otimizacao-imagens',
  standalone: true,
  imports: [NgOptimizedImage, Highlight],
  templateUrl: './otimizacao-imagens.component.html',
  styleUrl: './otimizacao-imagens.component.css',
  animations:[],
})
export class OtimizacaoImagensComponent {
  imgCode = `
<img ngSrc="/angular.png" width="400" height="200" alt="Imagem" priority>
  `;
}
