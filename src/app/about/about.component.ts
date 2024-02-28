import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ElementAnimationDirective } from '../element-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ ElementAnimationDirective ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private service: AppService) { }

  aboutMe = this.service.aboutMe;
}
