import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { AboutPage } from "./detail/about-detail";
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
        RouterModule.forChild(routes),
    ],
    // declarations: [ContactPage]
})

export class AboutModule { }