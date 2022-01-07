import { Component } from '@angular/core';
import { AppService } from './app.service'
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-download-frontend';
  private _value:number = 0;

  get value(): number {
    return this._value
  }

  set value(value: number) {
    if(!isNaN(value) && value <= 100){
      this._value = value
    }
  }

  constructor( private app: AppService) { }

  onDownload(): void {
    let filename = null
    this.app.download().subscribe(
      (event) => {
        console.log('res', event)
        // if(event['headers']){
        //   const [_, contentDisposition ] = event['headers'].get('Content-Disposition').split("filename=")
        //   filename = contentDisposition.replace(/"/g,"")
        // }
        filename = "dowenload.mp4"

        if(event['loaded'] && event['total']) {
          this.value = Math.round(event['loaded'] / event['total'] * 100)
        }

        if (event['body']) {
          saveAs(event['body'], filename)
        }
      }
    )
  }
}
