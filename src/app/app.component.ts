import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { ExperienceComponent } from "./experience/experience.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ExperienceComponent]
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private service: AppService) { }

}
