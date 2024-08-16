import { NgModule } from "@angular/core";
import { IeHeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        IeHeaderComponent,
    ],
    exports: [
        IeHeaderComponent
    ],
})

export class IeComponentsModule {}