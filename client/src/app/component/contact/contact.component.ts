import { Component, OnInit, HostListener } from '@angular/core';
import {UserService} from '../../services/user.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser'
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  contactForm: FormGroup;
  SubmitDis: boolean = true;
  
    @HostListener('input') oninput() {
  
    if (this.contactForm.valid) {
      this.SubmitDis = false;
      }
    }
  
    constructor(
      private fb: FormBuilder, 
      private connectionService: UserService,
      private title : Title
      ) {
  
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
  
      title.setTitle('Contact');
    }
  
    onSubmit() {
      
        window.alert('Your message has been sent.');
        this.contactForm.reset();
        this.SubmitDis = true;
    }
   
  
    ngOnInit() {
    }

}
