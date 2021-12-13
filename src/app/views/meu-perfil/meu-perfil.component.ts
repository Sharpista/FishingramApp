import { Profile } from './../../models/profile';
import { TokenStorageService } from './../../services/token-storage.service';
import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { PostService } from './../../services/post.service';
import { ProfileService } from './../../services/profile.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PhotoAlbums } from 'src/app/models/photoAlbum';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.scss']
})
export class MeuPerfilComponent implements OnInit {

  constructor(private profileService : ProfileService,
              private formBuilder: FormBuilder,
              private postService : PostService,
              private photoAlbumService : PhotoAlbumService,
              private tokenService : TokenStorageService) { }

  formProfile !: FormGroup;
  currentUser = this.tokenService.getUser();
  posts! : Post[];
  photoAlbums! : PhotoAlbums[];

  ngOnInit(): void {
    this.formProfile = this.formBuilder.group({
      name:[null],
      birthDate:[null],
      email:[null],
      zipCode:[null],
      street:[null],
      district:[null],
      number: [null],
      complement:[null],
      city: [null],
      state: [null],

    })

    this.profileService.get(this.currentUser.login['id']).subscribe(
      res => this.patchValuesForm(res)
    );
    this.postService.getAllPostFromUser(this.currentUser.login['id']).subscribe(
      res => this.posts = res
    )
    this.photoAlbumService.getAllPostFromUser(this.currentUser.login['id']).subscribe(
      res => this.photoAlbums = res
    )

  }
  patchValuesForm(dadosProfile:any){
    this.formProfile.patchValue({
      name:dadosProfile.name,
      birthDate:dadosProfile.birthDate,
      email:dadosProfile.email,
      zipCode:dadosProfile.zipCode,
      street:dadosProfile.street,
      district:dadosProfile.district,
      number: dadosProfile.number,
      complement:dadosProfile.complement,
      city: dadosProfile.city,
      state: dadosProfile.state,

    })
  }

}
