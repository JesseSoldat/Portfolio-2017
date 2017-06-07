import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {
  @Output() closeContact = new EventEmitter();
  @Input() contactType: string;
  type: string = '';
	email: string = 'jsoldat@hotmail.com';
  phone: string = '404-996-6868'
	isCopied: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.contactType === 'email') {
      this.type = this.email;
    }
    if(this.contactType === 'phone') {
      this.type = this.phone;
    }
  }

   closeClipboard() {
     this.closeContact.emit();
   }

}
