import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

//  contact = {nom: 'med', email: 'ahmed.dhouib@eni.tn' };

  pageContacts:any;

  motCle: number = 46;

  //pages:any;

  constructor(private http: Http , private contactservice: ContactsService , private router: Router) { }

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

  doSearch() {
    this.contactservice.getContacts()
      .subscribe(data => { this.pageContacts = data; }, err => {console.log(err); } );
  }

  chercher() {
    this.contactservice.getContactsByID(this.motCle)
      .subscribe(data => { this.pageContacts = data; }, err => {console.log(err); } ) ;
  }


  onEditContact(id: number) {
    this.router.navigate(['/editContact/', id ]);
  }

  onDeleteContact(c: Contact) {

    let confirm = window.confirm('Est vous sure ?');
    if (confirm == true)
    {
    this.contactservice.deleteContact(c.id)
       .subscribe(data => {  alert("Delete effectué") ; this.pageContacts.content.splice(this.pageContacts.content.indexOf(c),1 ); }, err => {console.log(err); } ) ;
    }


  }

}
