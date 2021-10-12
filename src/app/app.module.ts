import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Accordion } from 'src/components/Accordion/accordion.component';
import { StyledContent } from 'src/components/StyledContent/styledContent.component';
import { SafeHtmlPipe } from 'src/text/safeHtml.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { Panel } from 'src/components/Accordion/panel.component';

@NgModule({
  declarations: [AppComponent, Accordion, StyledContent, Panel, SafeHtmlPipe],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
