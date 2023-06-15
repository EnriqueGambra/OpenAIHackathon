import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

export interface Message {
  sender: 'User'|'Bot',
  message: string,
  id?: number,
}

@Component({
  selector: 'app-conversation-window',
  templateUrl: './conversation-window.component.html',
  styleUrls: ['./conversation-window.component.scss'],
})
export class ConversationWindowComponent implements OnInit {
  constructor(private MessageService: MessageService) {}

  messages: Array<Message> = [];
  ngOnInit() {
    this.MessageService.messageReceived.subscribe((message) => {
      this.postMessage(message);
    });
  }

  postMessage(messageContent: string) {
    const message: Message = {
      message: messageContent,
      sender: 'User'
    }
    this.messages.push(message);
    //setTimeout in case apicall fails.
    //do api call
    // on failure of api call remove message
  }
}
