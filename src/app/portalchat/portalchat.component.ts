import { Component } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-portalchat',
  templateUrl: './portalchat.component.html',
  styleUrls: ['./portalchat.component.css'],
})
export class PortalchatComponent {
  errorResponse : boolean = false
  loading = false
  apiResponse: string | undefined;
  promp: string | undefined;
  from: string | undefined;
  email: string | undefined;
  emailBody: string | undefined;
  motor: string | undefined;

  constructor(private chatService: ChatserviceService) {}

  onSubmit(event: Event) {
    this.errorResponse = false;
    this.apiResponse = ""
    event.preventDefault();

    const formData = {
      Destinatario: this.from,
      Email: this.email,
      MotorIA: this.motor,
      EmailBody: this.emailBody,
    };
   
this.loading= true
    this.chatService
      .sendEmail(formData)
      .pipe(
        map((response: any) => {
          const parsedResponse = response;
          return parsedResponse;
        })
      )
      .subscribe({
        next: (parsedResponse) => {
          this.loading= false
          console.log('Response:', parsedResponse);
          this.apiResponse = parsedResponse.answer;
          // Realiza acciones con la respuesta JSON analizada
        },
        error: (err: any) => {
          this.loading= false
          this.apiResponse = err.error;
          this.errorResponse = true;
          console.log('Error:', err);
          // Maneja el error
        },
        complete: () => {
          // Acciones completadas
        },
      });
  }
}
