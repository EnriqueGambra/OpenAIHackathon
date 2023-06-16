import { Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './conversation-window/conversation-window.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  endpoint: string = 'www.google.com';
  messageReceived: Subject<Message> = new Subject();

  constructor(private HttpClient: HttpClient) {}

  post(message: string) {
    if (message.length < 1) {
      return;
    }

    const userMessage: Message = {
      message: message,
      sender: 'User',
    }

    this.messageReceived.next(userMessage);

    const botResponse: Message = {
      message: 'Responding to your query of ' + message ,
      sender: 'Bot'
    }

    setTimeout(() => {
      this.messageReceived.next(botResponse);
    }, 500);

    

    // this.HttpClient.post(this.endpoint, message).pipe(
    //   tap((event: any) => {
    //     if (event.ok) {
    //       this.messageReceived.next(event)
    //     }
    //   })
    // );
  }
}
