import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact: Contact = new Contact();  // mouch new contact , il faut chercher le contact pour editer
  mode: number=1;
  idContact: number;

  constructor(public activatedRoute: ActivatedRoute ,
              public contactService: ContactsService,
              public router: Router) {
    this.idContact = activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {

    this.contactService.getContact(this.idContact).subscribe(data => { console.log(data); this.contact = data ; } , err => {console.log(err); } );
}

  UpdateContact() {
    this.contactService.updateContact(this.contact).subscribe(data => { alert("Mise à jour effectué"); console.log(data); this.router.navigate(['contacts'] ) } , err => {alert("Probleme"); console.log(err); } );
}
}
