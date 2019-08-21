import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ImageLoader {
  constructor(
    private httpClient: HttpClient
  ) {}

  public async loadImage(url: string): Promise<string | ArrayBuffer> {
    let result: Blob;
    try {
      result = await this.httpClient.get(url, {responseType: "blob"}).toPromise();
      return await this.createImageFromBlob(result);
    } catch (error) {
      throw new Error(error);
    }
  }

  private createImageFromBlob(blob: Blob): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let imageData: string | ArrayBuffer;

      reader.addEventListener("load", () => {
        imageData = reader.result;
        resolve(imageData);
      }, false);

      reader.addEventListener("error", (error) => {
        reject(error);
      });

      reader.readAsDataURL(blob);
    });
  }
}