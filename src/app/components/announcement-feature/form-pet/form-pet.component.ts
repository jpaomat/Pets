import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.scss']
})
export class FormPetComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  get tituloPost(){
    return this.registerForm.get('tituloPost');
  }
  get typePet(){
    return this.registerForm.get('typePet');
  }
  get namePet(){
    return this.registerForm.get('namePet');
  }
  get racePet(){
    return this.registerForm.get('racePet');
  }
  get agePet(){
    return this.registerForm.get('agePet');
  }
  get generoPet(){
    return this.registerForm.get('generoPet');
  }
  get vaccinePet(){
    return this.registerForm.get('vaccinePet');
  }
  get sterilizePet(){
    return this.registerForm.get('sterilizePet');
  }
  get locatedPet(){
    return this.registerForm.get('locatedPet');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get celular(){
    return this.registerForm.get('celular');
  }
  
  registerForm= this.formBuilder.group({
    tituloPost:['',{
      validators:[Validators.required,Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]+")]
    }], 
    typePet:['',Validators.required],
    namePet:['',{
      validators:[Validators.required,Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]+")]
    }],
    racePet:['',{
      validators:[Validators.required,Validators.pattern("[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]+")]
    }],
    agePet:['',Validators.required],
    generoPet:['',Validators.required],
    vaccinePet:['',Validators.required],
    sterilizePet:['',Validators.required],
    locatedPet:['',Validators.required],
    email:['',
      [Validators.required, Validators.email,Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]
    ],
    celular:['',{
      validators:[ Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    }],
  })

  ngOnInit() {
  }
  saveForm() {
    console.log(this.registerForm.value);
  }

}
