import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '[appFitText]'
})
export class FitTextDirective implements AfterViewInit, OnDestroy {
  @Input('appFitText') maxFontSize: number | '' = '';
  @Input() fitTextWrap: boolean = false;

  private resizeObserver: ResizeObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    if (this.fitTextWrap) {
      // Don't constrain height upfront — fit() manages overflow after measuring
    } else {
      element.style.whiteSpace = 'nowrap';
      element.style.overflow = 'hidden';
    }

    this.fit();

    this.ngZone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() => this.fit());
      this.resizeObserver.observe(element.parentElement || element);

      this.mutationObserver = new MutationObserver(() => this.fit());
      this.mutationObserver.observe(element, { childList: true, characterData: true, subtree: true });
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
  }

  private fit(): void {
    const el = this.el.nativeElement;
    const max = (typeof this.maxFontSize === 'number' && this.maxFontSize > 0)
      ? this.maxFontSize
      : 16;

    let size = max;
    el.style.fontSize = size + 'px';

    if (this.fitTextWrap) {
      const parent = el.parentElement;
      if (!parent) return;

      // Let element flow naturally so we can measure its real height
      el.style.overflow = 'visible';
      el.style.height = 'auto';

      // Available height = parent's inner height minus all siblings
      let siblingHeight = 0;
      Array.from(parent.children).forEach(child => {
        if (child !== el) {
          siblingHeight += (child as HTMLElement).offsetHeight;
        }
      });
      const availableHeight = parent.clientHeight - siblingHeight;

      while (size > 4) {
        el.style.fontSize = size + 'px';

        // Check width: temporarily disable word-breaking to see if any
        // single word overflows the line (would cause mid-word break)
        el.style.overflowWrap = 'normal';
        const wordOverflows = el.scrollWidth > el.clientWidth;
        el.style.overflowWrap = '';

        // Check height: does the naturally-wrapped text exceed available space?
        const heightOverflows = el.offsetHeight > availableHeight;

        if (!wordOverflows && !heightOverflows) break;
        size--;
      }

      el.style.overflow = 'hidden';
      el.style.height = '';
    } else {
      while (el.scrollWidth > el.clientWidth && size > 4) {
        size--;
        el.style.fontSize = size + 'px';
      }
    }
  }
}
