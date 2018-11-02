import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ContactsService} from '../../services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

//  contact = {nom: 'med', email: 'ahmed.dhouib@eni.tn' };

  pageContacts:any;

  motCle:number=46;

  //pages:any;

  constructor(private http:Http,public contactservice:ContactsService) { }

  ngOnInit() {


/*    // Marche (sans service angular)
    this.http.get("http://localhost:8080/contacts")
      .pipe(map(resp => resp.json()))  /// map permet de convertir un donné vers un autre format
      .subscribe(data => {
        this.pageContacts = data;
      },err=>{console.log(err);})
*/

    this.doSearch();

    console.log("Inilialisation...........");
  }

  doSearch(){
    this.contactservice.getContacts()
      .subscribe(data => {
        this.pageContacts = data;
      },err=>{console.log(err);};
  }

  chercher(){

    this.contactservice.getContactsByID(this.motCle)
      .subscribe(data => {
        this.pageContacts = data;
      },err=>{console.log(err);};
  }
}
