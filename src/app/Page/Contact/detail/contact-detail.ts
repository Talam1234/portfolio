import { Component } from "@angular/core";

@Component({
  templateUrl: 'contact-detail.html',
  styleUrls: ['contact-detail.css'],
})

export class ContactPage {
  constructor() { console.log('test_contact')}

  downloadResume() {
    const link = document.createElement('a');
    link.href = '../../../../assets/SWE_Resume_Timsal.pdf';
    link.download = 'Md_Timsal_Alam_Resume.pdf'; // custom filename
    link.click();
  }

  
}