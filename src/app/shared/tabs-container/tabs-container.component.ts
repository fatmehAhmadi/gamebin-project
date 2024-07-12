import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css',
})
export class TabsContainerComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();
active: any;

  ngAfterViewInit() {
    const activeTabs: TabComponent[] = this.tabs.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  selectTab(tab: any) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }
}
