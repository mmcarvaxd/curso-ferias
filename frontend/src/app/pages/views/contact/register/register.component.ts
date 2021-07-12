import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ContactType } from 'src/app/models/contactType.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup
  formSubmitted: boolean = false

  contact: Contact
  contactTypes: ContactType[] = [

    {
      id: 1,
      type: 'Residencial'
    },
    {
      id: 2,
      type: 'Celular'
    },
    {
      id: 3,
      type: 'Comercial'
    }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.registerFormGroup = this.formBuilder.group({

      name: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      contactType: ['', [Validators.required]]
    })
  }

  register(): void {

    this.formSubmitted = true

    if(this.registerFormGroup.valid) {

      console.log('tudo certo!')
    }
  }

}
