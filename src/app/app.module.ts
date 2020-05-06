import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { RouterTabModule } from "../../projects/cativo/router-tab/src/lib/router-tab.module";
import {
  AppComponent,
  PageAComponent,
  PageBComponent,
  PageCComponent,
} from "./app.components";

@NgModule({
  declarations: [AppComponent, PageAComponent, PageBComponent, PageCComponent],
  imports: [
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "a" },
      { path: "a", component: PageAComponent },
      { path: "b", component: PageBComponent },
      { path: "c", component: PageCComponent },
    ]),
    BrowserModule,
    RouterTabModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
