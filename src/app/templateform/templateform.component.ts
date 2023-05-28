import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss'],
})
export class TemplateformComponent implements OnInit {
  // @ViewChild('myForm') myForm:NgForm;
  public firstname!: string;
  public lastname!: string;
  public emailData!: string;
  initialVal!: null;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('form :>> ', form.value);
    this.firstname = form.value.firstname;
    this.lastname = form.value.lastname;
    this.emailData = form.value.email;
  }

  resetUserForm(form: NgForm) {
    form.resetForm();
    this.initialVal = null;
  }
}
