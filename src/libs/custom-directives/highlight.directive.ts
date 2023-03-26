import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  // @HostListener("mouseenter") onMouseEnter() {
  //   // this.makeInvisible();
  //   this.makeBigger();
  // }

  // @HostListener("mouseleave") onMouseLeave() {
  //   // this.makeVisible();
  //   this.makeSmaller();
  // }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  makeVisible() {
    this.el.nativeElement.style = "visibility:visible";
  }

  makeInvisible() {
    this.el.nativeElement.style = "visibility:hidden";
  }

  makeBigger() {
    this.el.nativeElement.style = "font-size:2rem";
  }

  makeSmaller() {
    this.el.nativeElement.style = "font-size:0.8rem";
  }
}
