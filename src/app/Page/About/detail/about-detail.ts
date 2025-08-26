import { Component } from "@angular/core";

@Component({
  templateUrl: 'about-detail.html',
  styleUrls: ['about-detail.scss'],
})

export class AboutPage {
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

  skill = [
    {
      title: 'MySql',
      logo: '../../../../assets/icon/mysql-database.png'
    },{
      title: 'Javascript',
      image: '../../../../assets/icon/js.png'
    },{
      title: 'React / React-native',
      logo: '../../../../assets/icon/physics.png'
    },{
      title: 'Angular',
      logo: '../../../../assets/icon/programing.png'
    },{
      title: 'Dart',
      logo: '../../../../assets/icon/target.png'
    },{
      title: 'Typescript',
      logo: '../../../../assets/icon/typescript.png'
    }
  ]
  
}