import { Component } from "@angular/core";
import { ExCardComponent } from "src/app/Component/experience_card/ex_card.component";


@Component({
  templateUrl: 'home-detail.html',
  styleUrls: ['home-detail.css'],
})

export class HomePage {
  constructor() { console.log('test')}

    experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Ceesolution Pte. Ltd.',
      period: 'Mar 2024 - Jul 2024',
      description: 'Developing and maintaining web & mobile apps using Angular and Ionic.'
    },
    {
      title: 'React-native Developer',
      company: 'Web techno solution',
      period: 'jun 2023 - Feb 2024',
      description: 'Developing and maintaining mobile apps using React-native and Firebase integration.'
    },
    {
      title: 'Intern',
      company: 'Siance Software',
      period: 'Feb 2023 - Jun 2023',
      description: 'Worked on building responsive UI with React-native.'
    }
  ];

  skill = []

  async ionViewWillEnter() {
    console.log('testing')
  }

  ngOnInit(){
    console.log('check');
  }
  
}