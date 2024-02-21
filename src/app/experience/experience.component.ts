import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  constructor(private service: AppService) { }
  
  experiences = this.service.experiences;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.injectCursorPosition(Math.round(e.clientX), Math.round(e.clientY));
  }
  
  ngOnInit(): void {
  }
  
  injectCursorPosition = (x: Number, y: Number) => {
    document.documentElement.style.setProperty('--x', String(x))
    document.documentElement.style.setProperty('--y', String(y))
  }

}
