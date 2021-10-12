// Source: https://www.intricatecloud.io/2019/10/using-angular-innerhtml-to-display-user-generated-content-without-sacrificing-security/

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value = ''): SafeHtml {
    const sanitizedContent = DOMPurify.sanitize(value);
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}
