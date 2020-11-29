import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  movieForm: FormGroup;
  itemSaved: boolean;
  itemUpdated: boolean;
  constructor(private fb: FormBuilder,private service: DataService) {
    this.movieForm = this.fb.group({
      movieName: ['', [Validators.required]],
      movieGenre: ['', [Validators.required]],
      movieDescription: ['', [Validators.required]],
      movieId: ['']
    });
  }

  ngOnInit(): void {
    this.service.getDataForUpdate().subscribe(res => {
      this.movieForm.controls.movieId.setValue(res["id"]);
      this.movieForm.controls.movieName.setValue(res["name"]);
      this.movieForm.controls.movieGenre.setValue(res["genre"]);
      this.movieForm.controls.movieDescription.setValue(res["description"]);
    });
  }

  onSubmit(){
    if (this.movieForm.invalid){
      return;
    }
    else {
      if (!this.movieForm.controls.movieId.value){
        const payload = {
          name: this.movieForm.controls.movieName.value,
          genre: this.movieForm.controls.movieGenre.value,
          description: this.movieForm.controls.movieDescription.value
        };
        this.service.saveMovie(payload).subscribe(res => {
          this.service.setMovieSubmitted(res);
          this.itemSaved = true;
          this.movieForm.reset();
          setTimeout(() => {
            this.itemSaved = false;
          }, 6000);
        });
      }
      else{
        const id = this.movieForm.controls.movieId.value;
        const payload = {
          name: this.movieForm.controls.movieName.value,
          genre: this.movieForm.controls.movieGenre.value,
          description: this.movieForm.controls.movieDescription.value
        };
        this.service.updateMovie(id,payload).subscribe(res => {
          this.service.setMovieSubmitted(res);
          this.itemUpdated = true;
          this.movieForm.reset();
          setTimeout(() => {
            this.itemUpdated = false;
          }, 6000);
        });
      }
    }
  }

  get f() {
    return this.movieForm.controls;
  }


}
