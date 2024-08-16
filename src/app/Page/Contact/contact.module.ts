import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ContactPage } from "./detail/contact-detail";

const routes: Routes = [
    {
        path: '',
        component: ContactPage
    }
]

@NgModule({
    imports: [
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ContactPage]
})

export class ContactModule { }