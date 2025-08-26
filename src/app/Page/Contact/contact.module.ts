import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ContactPage } from "./detail/contact-detail";
// import { PdfViewerModule } from "ng2-pdf-viewer";

const routes: Routes = [
    {
        path: '',
        component: ContactPage
    }
]

@NgModule({
    imports: [
        // PdfViewerModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ContactPage]
})

export class ContactModule { }