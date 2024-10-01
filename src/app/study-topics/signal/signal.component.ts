import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  @Output() public response = new EventEmitter()
  
  firstName = input()
  lastName = input()


  emitter(){ 
    this.response.emit('olá')
  }

}
