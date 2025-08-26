import { Component, Input, OnInit } from "@angular/core";
// import { PopoverController } from "@ionic/angular";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ex-card",
  templateUrl: "./ex_card.component.html",
})
export class ExCardComponent implements OnInit {
  @Input() title!: string;
  @Input() company!: string;
  @Input() period!: string;
  @Input() description!: string;

//   constructor(
//     private popoverController: PopoverController
//   ) {}

  ngOnInit(): void {
    console.log("show menu");
  }
}
