import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Contact} from '../model/model.contact';

@Injectable()

export class ContactsService{

  constructor(public http:Http){}


  getContacts() {
    return this.http.get("http://localhost:8080/contacts")
      .pipe(map(resp => resp.json()));
  }


// Marche pas
  getContactsByID(motCle: number) {
   // console.log("http://localhost:8080/contacts/" +  motCle);
    return this.http.get(  "http://localhost:8080/contacts/46")
      .pipe(map(resp => resp.json()));
  }

  saveContact(contact: Contact){
    return this.http.post("http://localhost:8080/contacts/",contact)
      .pipe(map(resp => resp.json()));
  }

  getContact(id: number) {
    return this.http.get("http://localhost:8080/contacts/"+id)
      .pipe(map(resp => resp.json()));
  }

  updateContact(contact: Contact) {
    return this.http.put("http://localhost:8080/contacts/"+contact.id,contact)
      .pipe(map(resp => resp.json()));
  }


  deleteContact(id: number) {
    return this.http.delete("http://localhost:8080/contacts/"+id)
      .pipe(map(resp => resp.json()));
  }


}
