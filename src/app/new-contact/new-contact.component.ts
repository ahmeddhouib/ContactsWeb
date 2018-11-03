import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact: Contact = new Contact();
  mode:number=1;

  constructor(public contactsService:ContactsService){}


  saveContact(){
    console.log(this.contact);
    this.contactsService.saveContact(this.contact)
      .subscribe(data => { console.log(data); this.contact = data ; this.mode = 2; } , err => {console.log(err); } );
  }

  ngOnInit(): void {
  }
}


