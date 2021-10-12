import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styled-content',
  templateUrl: './styledContent.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StyledContent {
  @Input() html?: string;
}
