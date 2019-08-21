import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { imageData } from './iplabs/imageData';
import { ImageLoader } from './iplabs/imageLoader';

export interface ImageObject {
  htmlImage: HTMLImageElement,
  id: number,
}

@Injectable({ providedIn: "root" })
export class ImageService {
  private imageObjects: ImageObject[] = [];

  public imagesLoaded$ = new BehaviorSubject<boolean>(false);

  constructor(
    private imageLoader: ImageLoader
  ) {
    this.init();
  }

  public getImage(id: number): ImageObject | null {
    const image = this.imageObjects.find(image => image.id === id);
    return image || null;
  }

  public getImages(): ImageObject[] {
    return this.imageObjects;
  }

  public removeImageObject(id: number) {
    const index = this.imageObjects.findIndex(object => object.id === id);
    if (index !== -1) {
      this.imageObjects.splice(index, 1);
    }
  }

  private async init() {
    for (const imageJson of imageData.images) {
      try {
        const imageObject = await this.createImageObject(imageJson.url, imageJson.id);
        this.imageObjects.push(imageObject);
      } catch (error) {

      }
    }
    this.imagesLoaded$.next(true);
  }

  private createImageObject(imageUrl: string, id: number): Promise<ImageObject> {
    return new Promise(async (resolve, reject) => {
      try {
        const imageSrc = await this.imageLoader.loadImage(imageUrl) as string;
        const htmlImage = new Image();
        htmlImage.onload = () => {
          resolve({
            htmlImage: htmlImage,
            id: id
          });
        };

        htmlImage.src = imageSrc;
      } catch (error) {
        reject(error);
      }
    });
  }
}