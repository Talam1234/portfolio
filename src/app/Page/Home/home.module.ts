import { NgModule } from "@angular/core";
import { HomePage } from "./detail/home-detail";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: HomePage
    }
]

@NgModule({
    declarations: [HomePage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ]
})

export class HomeModule { }