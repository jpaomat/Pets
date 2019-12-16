import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { World } from 'src/app/shared/interfaces/world';
import { PeticionesService } from 'src/app/shared/services/peticiones.service';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.scss']
})
export class FormPetComponent implements OnInit {

  worldURL=environment.worldUrl;
  worldsComplete:World[];
  constructor( private peticionesService: PeticionesService, private formBuilder: FormBuilder) { }

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
  get world(){
    return this.registerForm.get('world');
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
    world:['',Validators.required],
  });
  worlds: any[] = [];
  ngOnInit() {
    this.peticionesService.httpGet(this.worldURL).subscribe((record: World[]) => {
      this.worldsComplete = record;
      for (let item in this.worldsComplete) {
        this.worlds.push(
          { name: this.worldsComplete[item].name }
        )
      }
    }, err => console.error(err))
  }
  saveForm() {
    console.log(this.registerForm.value);
  }

}
