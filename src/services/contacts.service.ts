import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()

export class ContactsService{

  constructor(public http:Http){}


  getContacts() {
    return this.http.get("http://localhost:8080/contacts")
      .pipe(map(resp => resp.json()));
  }



  getContactsByID(motCle:number) {
    console.log("http://localhost:8080/contacts/" +  motCle);
    return this.http.get("http://localhost:8080/contacts/46")
      .pipe(map(resp => resp.json()));
  }


}
