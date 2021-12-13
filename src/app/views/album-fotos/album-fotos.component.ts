import { PhotoAlbums } from './../../models/photoAlbum';
import { TokenStorageService } from './../../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from 'src/app/services/photo-album.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-album-fotos',
  templateUrl: './album-fotos.component.html',
  styleUrls: ['./album-fotos.component.scss']
})
export class AlbumFotosComponent implements OnInit {

  constructor(private tokenService: TokenStorageService,
    private photoAlbumService: PhotoAlbumService,
    private formBuilder: FormBuilder) { }

  formPhotoAlbums ! : FormGroup;
  currentUser = this.tokenService.getUser();
  photoAlbum : PhotoAlbums = new PhotoAlbums();
  photoAlbums: PhotoAlbums[] = [];

  ngOnInit(): void {
    this.formPhotoAlbums = this.formBuilder.group({
      description:[null],

    })

    this.photoAlbumService.getAllPostFromUser(this.currentUser.login['id']).subscribe(
      response  => this.photoAlbums = response
    )

  }

  onSubmit(){

    this.photoAlbum = {
      id : undefined,
      creationDate : undefined,
      description : this.formPhotoAlbums.get('description')?.value,
      profileId : this.currentUser.login['id']
    }

    this.photoAlbumService.create(this.photoAlbum).subscribe(
      success => console.log('salvo'),
      err => console.log('falha')
    )
  }

}
