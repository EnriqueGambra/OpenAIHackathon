import { Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './conversation-window/conversation-window.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private endpoint: string = 'https://text-to-embedding.azurewebsites.net/api/HttpTrigger1?';

  private xFunctionKey: string = '-MAJtoShM1cFbDjW2vPrEU3Ehxx6Sq1mxtzuskCnxX5rAzFuy77kBg==';

  messageReceived: Subject<Message> = new Subject();

  constructor(private HttpClient: HttpClient) {}

  post(message: string) {

    const userMessage: Message = {
      message: message,
      sender: 'User',
    }

    this.messageReceived.next(userMessage);

    const botResponse: Message = {
      message: 'Message From Bot',
      sender: 'Bot'
    }

    const payload = {
      input: message,
    }

    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'x-function-keys': this.xFunctionKey,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    });

    const options = { headers: headers };

    // setTimeout(() => {
    //   this.messageReceived.next(botResponse);
    // }, 500);

    this.HttpClient.post(this.endpoint, payload, options).pipe(
      tap((event: any) => {
        console.log("EVENT RESPONSE IS: ", event);
        if (event.ok) {
          this.messageReceived.next(event)
        }
      })
    ).subscribe();
  }
}
