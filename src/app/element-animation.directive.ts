import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appElementAnimation]',
  standalone: true
})
export class ElementAnimationDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input({required: true}) appElementAnimation!: any;

  ngOnInit(): void {
    console.log(this.el);
    
    this.el.nativeElement.classList.add('animation-hidden');
    this.appElementAnimation['time'] ? this.el.nativeElement.style.transition = 'all ' + this.appElementAnimation['time'] + 's' : '';
    this.appElementAnimation['translateX'] ? this.el.nativeElement.style.transform = 'translateX(' + this.appElementAnimation['translateX'] + ')' : '';
    this.observer.observe(this.el.nativeElement);
  }

  observer = new IntersectionObserver((entry) => {
    if(entry[0].isIntersecting) {
      entry[0].target.classList.add('animation-show');
    } else {
      entry[0].target.classList.remove('animation-show');
    }
  }, { threshold: 0.2 });
}
