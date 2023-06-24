import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(private http: HttpClient) { }
  private apiKey = 'C1B993886A9FBA40550EFE5F07893CF2D57743C28275522C5B5524742DB2BC57CB8A31BECD1B98FA0D2E112272ACB8CC';


  sendEmail(from: string, to: string, subject: string, body: string) {
    const url = 'https://api.elasticemail.com/v2/email/send';

    const payload = {
      apikey: this.apiKey,
      subject: subject,
      from: from,
      to: to,
      body_html: body
    };

    return axios.post(url, payload);
  }
}
