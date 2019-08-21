import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService, ImageObject} from './imageService';

@Component({
  selector: 'image-details',
  template: `
    <p [routerLink]="['']">back</p>
    <p [routerLink]="['']" (click)="delete()">delete</p>
    <p>original width: {{image?.htmlImage?.width}} </p>
    <p>original height: {{image?.htmlImage?.height}} </p>
    <input type="range" #widthSlider
      [min]="minWidth"
      [max]="image?.htmlImage?.width || initialWidth * 2"
      [value]="initialWidth"
      (change)="return;">
      <br>
    <img [width]="widthSlider?.value" [src]="image?.htmlImage?.src">
  `
})
export class ImageDetailsComponent {
  public image: ImageObject | null = null;
  public minWidth = 100;
  public initialWidth = 500;

  private id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.imageService.imagesLoaded$.subscribe(_ => {
        this.image = this.imageService.getImage(this.id);
    })
  }

  public delete() {
    this.imageService.removeImageObject(this.id);
  }
}