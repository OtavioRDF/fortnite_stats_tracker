import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewPlayerService } from '../../services/new-player.service';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';


interface NewPlayerForm {
  accountId: FormControl;
  userName: FormControl;
  accountType: FormControl;
  timeWindow: FormControl;
  image: FormControl;
}


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: [NewPlayerService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  newPlayerForm!: FormGroup<NewPlayerForm>;

  constructor(
    private newPlayerService: NewPlayerService,
    private router: Router
  ){
    this.newPlayerForm = new FormGroup({
      accountId: new FormControl('', { nonNullable: true, validators: [Validators.required]}),
      userName: new FormControl('', { nonNullable: true, validators: [Validators.required]}),
      accountType: new FormControl(''),
      timeWindow: new FormControl(''),
      image: new FormControl('')
    })
  }
  
  
  
  submit(){
    this.newPlayerService.newPlayer(this.newPlayerForm.value).subscribe(
      response => {
        alert("User created sucessfully!");
        this.router.navigate(['/'])
      },
      error => {
        alert("Error creating user: " + error.message)
      }
    );

  }
}
