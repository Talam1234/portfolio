import { Component, Input, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ie-header",
  templateUrl: "./ie-header.component.html",
})
export class IeHeaderComponent implements OnInit {
  @Input() props: any;
  @Input() menu = true;
  @Input() profile = true;

  constructor(
    private popoverController: PopoverController
  ) {}

  ngOnInit(): void {
    console.log("show menu", this.menu);
  }
}
