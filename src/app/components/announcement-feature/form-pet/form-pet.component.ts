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

  registerForm= this.formBuilder.group({
    tituloPost:['', Validators.required], 
    typePet:[''],
    namePet:[''],
    racePet:[''],
    agePet:[''],
    generoPet:[''],
    vaccinePet:[''],
    sterilizePet:[''],
    locatedPet:[''],
    email:[''],
    celular:[''],
  })

  ngOnInit() {
  }
  saveForm() {
    console.log(this.registerForm.value);
  }

}
