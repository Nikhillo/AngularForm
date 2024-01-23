import { Component } from '@angular/core';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  constructor(private email:EmailService){}
   data={
    to :"",
    subject:"",
    message:""
   }

  doSubmitForm(){
    console.log("try to submit");
    this.email.sendEmail(this.data).subscribe(
      response=>{
console.log(response);

      },
      error=>{
console.log(error);

      }
    )
  }
}
