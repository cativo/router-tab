import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterTab } from "./router-tab.directive";
import { RouterTabs } from "./router-tabs.directive";

@NgModule({
  declarations: [RouterTab, RouterTabs],
  exports: [MatTabsModule, RouterTabs, RouterTab],
})
export class RouterTabModule {}
