import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AboutPage } from "./detail/about-detail";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IeComponentsModule } from "src/app/Component/componenet.module";
// import { ContactPage } from "./detail/contact-detail";


const routes: Routes = [
    {
        path: '',
        component: AboutPage
    }
]

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        IeComponentsModule,
        RouterModule.forChild(routes),
    ],
    declarations: [AboutPage]
})

export class AboutModule { }