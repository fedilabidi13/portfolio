import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MailingService } from '../mailing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email!: string;
  message !: string;
  name!: string;
   constructor(private http: HttpClient, private emailService: MailingService){}
   sendEmail()
   {
 
    const to = 'labidi.fedi@esprit.tn';
    const subject = 'Email from '+ this.name;
    const body = this.message;

    this.emailService.sendEmail(this.email,to, subject, body)
    .then(response => console.log('Email sent!', response.data))
    .catch(error => console.error('Error sending email:', error));
   }

}
