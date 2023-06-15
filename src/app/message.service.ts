import { Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  endpoint: string = 'www.google.com';
  messageReceived: Subject<string> = new Subject();

  constructor(private HttpClient: HttpClient) {}

  post(message: string) {
    this.messageReceived.next(message);
    // this.HttpClient.post(this.endpoint, message).pipe(
    //   tap((event: any) => {
    //     if (event.ok) {
    //       this.messageReceived.next(event)
    //     }
    //   })
    // );
  }
}
