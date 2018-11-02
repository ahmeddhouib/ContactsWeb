import {Input} from '@angular/core';

export class Contact{
 // id: number ;
  @Input()   nom: string = "" ;
  @Input() prenom: string="";
  @Input() email: string="";
  @Input() dateNaissance:Date;
  @Input() tel: number=0;
  @Input() photo: string="";



}
