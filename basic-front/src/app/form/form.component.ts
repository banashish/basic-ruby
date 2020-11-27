import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movieForm: FormGroup; 
  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      movieName: ['', [Validators.required]],
      movieGenre: ['', [Validators.required]],
      movieDescription: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.movieForm.invalid){
      return;
    }
    else {
      console.log(this.movieForm.controls)
    }
  }

  get f() {
    return this.movieForm.controls;
  }


}
