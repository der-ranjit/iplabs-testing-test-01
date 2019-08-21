import { Component } from '@angular/core';
import { ImageService } from './imageService';

@Component({
  selector: 'start-component',
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
export class StartComponent  {
  public imageSrc: string | ArrayBuffer;
  public thumbnailSize = 200;

  constructor(
    public imageService: ImageService
  ) {}
}
