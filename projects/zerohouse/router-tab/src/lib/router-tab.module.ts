import {NgModule} from '@angular/core';
import {RouterTab} from './router-tab.directive';
import { MatTabGroup } from '@angular/material/tabs';
import {RouterTabs} from './router-tabs.directive';

@NgModule({
  declarations: [RouterTab, RouterTabs],
  exports: [MatTabsModule, RouterTabs, RouterTab]
})
export class RouterTabModule {
}
