import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

  img:any;
  formPost: FormGroup = new FormGroup({})
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formPost = this._formBuilder.group({
        photo:[null],
        title:[null],
        description:[null],
        img:[null]

    })
  }
  imagePreview(e : Event){
    const file = (e.target as HTMLInputElement).files![0];

    this.formPost.patchValue({
      img:file
    })

    this.formPost.get('img')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () =>{
      this.img = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
