import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessagingService, IMessage } from './messaging.service';

export class UserUpdatedMessage implements IMessage {
  constructor() { }
  channel: string;
  data: any;
}

@Component({
  selector: 'app-messagin-service',
  templateUrl: './messagin-service.component.html',
  styleUrls: ['./messagin-service.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessaginServiceComponent {
  message: any;
  subscription: Subscription;

  constructor(private messagingService: MessagingService) {
    // subcriber using mvvm type messaging
    this.subscription = this.messagingService.of(UserUpdatedMessage).subscribe(message => {
      this.message = message;
      alert(this.message.text);
    }); 
  }

  publish(): void {
    // send message to subscribers via observable subject
    this.messagingService.publish(new UserUpdatedMessage());
  }

}
