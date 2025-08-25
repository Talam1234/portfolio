import { NgModule } from "@angular/core";
// import { IeHeaderComponent } from "./header/header.component";
import { ExCardComponent } from "./experience_card/ex_card.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [
        // IeHeaderComponent,
        ExCardComponent
    ],
    imports: [
        CommonModule,
        IonicModule 
    ],
    exports: [
        // IeHeaderComponent,
        ExCardComponent
    ],
})

export class IeComponentsModule {}