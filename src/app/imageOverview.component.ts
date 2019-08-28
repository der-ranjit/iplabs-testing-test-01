import { Component } from '@angular/core';
import { ImageService } from './imageService';

@Component({
  selector: 'image-overview-component',
  template: `
    <img *ngFor="let image of imageService?.getImages()" 
      [routerLink]="['/image/' + image?.id]"
      [src]="image?.htmlImage?.src"
      [width]="thumbnailSize"
    >
  `,
  styles: [`
  `]
})
export class ImageOverviewComponent  {
  public imageSrc: string | ArrayBuffer;
  public thumbnailSize = 200;

  constructor(
    public imageService: ImageService
  ) {}
}
