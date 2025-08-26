import { Component, Input, OnInit } from "@angular/core";
// import { PopoverController } from "@ionic/angular";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "sk-card",
  templateUrl: "./sk_card.component.html",
})

export class SkCardComponent implements OnInit {
  @Input() title!: string;
  @Input() image?: string;

  ngOnInit(): void {
    console.log("show menu");
  }
}

