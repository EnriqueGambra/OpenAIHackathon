import { Component, Input } from '@angular/core';
import { Message } from '../conversation-window/conversation-window.component';
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input('message')
  public message: Message = {
    message: '',
    sender: 'User'
  } as Message;


  public botIcon = faRobot;

  public userIcon = faUser;

  
}
