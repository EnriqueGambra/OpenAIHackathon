import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent {
  constructor(private MessageService: MessageService) {}

  onSubmit(event: any) {
    const inputBox = event.target[0];
    event.preventDefault();
    
    this.MessageService.post(inputBox.value);
    inputBox.value = '';
  }
}
