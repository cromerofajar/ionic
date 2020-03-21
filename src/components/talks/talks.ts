import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'talks',
  template: `
    <ion-list inset>
      <p *ngFor="let talk of talks">
        <ion-icon name="beer"></ion-icon>
        {{talk.title}}</p>
    </ion-list>
`
})
export class TalksComponent {

  talks;

  constructor(public http: HttpClient) {
    this.getAllTakls()
  }

  getAllTakls(){
    return this.http.get('http://www.mocky.io/v2/5e73a70e300000fd9b2e6766').subscribe(result =>{this.talks = result;})
  }
}
