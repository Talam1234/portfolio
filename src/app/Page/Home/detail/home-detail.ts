import { Component } from "@angular/core";
import { ExCardComponent } from "src/app/Component/experience_card/ex_card.component";


@Component({
  templateUrl: 'home-detail.html',
  styleUrls: ['home-detail.css'],
})

export class HomePage {
  constructor() { console.log('test') }

  education = [
    {
      College: 'NIT Karnataka (CSE-IS)',
      location: 'Surathkal',
      period: 'Aug 2025 - Jul 2027',
      description: 'Pursuing M.Tech in CSE (IS) with a focus on Information Security, Algorithms, Database Security and Network Security'
    },
    {
      College: 'University of Kalyani (IT)',
      location: 'Kalyani',
      period: 'jul 2010 - jun 2023',
      description: 'Completed B.tech in IT with a experience of software development, web development, Data Structure and Algorithm'
    },
    {
      College: '12th',
      location: 'Snatak College',
      period: 'Feb 2016 - Jun 2019',
      description: 'Gained strong knowledge in advanced mathematical computations and successfully competed in the JEE examination.'
    }
  ];

  skill = []

  async ionViewWillEnter() {
    console.log('testing')
  }

  ngOnInit() {
    console.log('check');
  }

}