import { NgModule } from "@angular/core";
// import { IeHeaderComponent } from "./header/header.component";
import { ExCardComponent } from "./experience_card/ex_card.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { SkCardComponent } from "./Skill_card/sk.component";

@NgModule({
    declarations: [
        // IeHeaderComponent,
        ExCardComponent,
        SkCardComponent
    ],
    imports: [
        CommonModule,
        IonicModule 
    ],
    exports: [
        // IeHeaderComponent,
        ExCardComponent,
        SkCardComponent
    ],
})

export class IeComponentsModule {}