import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
  }


  saveContact(){
    console.log(this.contact);
  }
}
