import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class Panel {
  @Input() content?: string;
  @Input() handleToggle?: (open: boolean) => void;
  @Input() open = false;
  @Input() title!: string;

  togglePanel = () => {
    this.handleToggle
      ? this.handleToggle(!this.open)
      : (this.open = !this.open);
  };
}
