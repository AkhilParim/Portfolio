import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { ElementAnimationDirective } from '../element-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, ElementAnimationDirective ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private service: AppService) { }
  projects = this.service.projects;
  
}
