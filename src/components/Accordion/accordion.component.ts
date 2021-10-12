import { Component, Input } from '@angular/core';
import AccordionSection from './AccordionSection';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class Accordion {
  @Input() sections!: AccordionSection[];
  @Input() autoCollapse?: boolean;

  toggledSection?: AccordionSection;

  ngOnChanges() {
    this.toggledSection = this.autoCollapse
      ? this.sections?.find((section) => section.initiallyOpen)
      : undefined;
  }

  toggleSection = (section: AccordionSection, open: boolean) => {
    if (this.autoCollapse) {
      this.toggledSection = open ? section : undefined;
    }
  };
}
