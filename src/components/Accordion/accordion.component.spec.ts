import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Accordion } from './accordion.component';
import AccordionSection from './AccordionSection';
import { Panel } from './panel.component';

describe('Accordion', () => {
  const mockSections: AccordionSection[] = [
    {
      title: 'Section 1',
      content: '<span style="color:red">Red text</span>',
    },
    {
      title: 'Section 2',
      content: 'Test <b>2</b>',
      initiallyOpen: true,
    },
    {
      title: 'Section 3',
      content: 'Test <b>3</b>',
      initiallyOpen: true,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accordion, Panel],
      imports: [MatIconModule],
    }).compileComponents();
  });

  it('should have its panels closed unless set as open', () => {
    const fixture = TestBed.createComponent(Accordion);
    const component = fixture.componentInstance;

    component.sections = mockSections;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const panels = compiled.querySelectorAll('.Panel');
    expect(panels.length).toEqual(3);

    expect(panels.item(0).classList).not.toContain('Panel--open');
    expect(panels.item(1).classList).toContain('Panel--open');
    expect(panels.item(2).classList).toContain('Panel--open');
  });

  it('should only keep the first panel open when auto-collapse enabled', () => {
    const fixture = TestBed.createComponent(Accordion);
    const component = fixture.componentInstance;

    component.sections = mockSections;
    component.autoCollapse = true;
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const panels = compiled.querySelectorAll('.Panel');
    expect(panels.length).toEqual(3);

    expect(panels.item(0).classList).not.toContain('Panel--open');
    expect(panels.item(1).classList).toContain('Panel--open');
    expect(panels.item(2).classList).not.toContain('Panel--open');
  });
});
