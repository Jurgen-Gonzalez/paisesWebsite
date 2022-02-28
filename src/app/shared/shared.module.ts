import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";


@NgModule({
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    imports: [
        RouterModule,
        CommonModule,
    ],
})
export class SharedModule{}