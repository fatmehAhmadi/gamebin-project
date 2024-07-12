import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  @Input() tabTitle: string = '';
  @Input() active = false;
}
