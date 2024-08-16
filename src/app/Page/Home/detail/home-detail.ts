import { Component } from "@angular/core";

@Component({
  templateUrl: 'home-detail.html',
  styleUrls: ['home-detail.css'],
})

export class HomePage {
  constructor() { console.log('test')}

  async ionViewWillEnter() {
    console.log('testing')
  }

  ngOnInit(){
    console.log('check');
  }
  
}