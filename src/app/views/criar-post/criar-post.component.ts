import { TokenStorageService } from './../../services/token-storage.service';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  formPost!: FormGroup
  imageURL = "";
  file!:any;
  post !: Post;
  currentUser : any

  constructor(private formBuilder : FormBuilder,
              private postService : PostService,
              private tokenService : TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
    this.formPost = this.formBuilder.group({
      publishDateTime:[null],
      photo: [null],
      title:[null],
      description:[null],
    })
  }
  onFileChange(ev:any){

    const reader = new FileReader();

    reader.onload = (event:any) => this.imageURL = event.target.result;

    this.file = ev.target.files;

    reader.readAsDataURL(this.file[0]);
  }

  onSubmit(){

    let fileToUpload = this.file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload);
    this.post ={
      id: undefined,
      description : this.formPost.get('description')?.value,
      photo :formData,
      publishDateTime : undefined,
      title : this.formPost.get('title')?.value,
      profileId : this.currentUser.login['id']
    }

    return this.postService.create(this.post).subscribe(
      success => console.log('deu certo'),
      err => console.log('erro')
    )
  }

}
