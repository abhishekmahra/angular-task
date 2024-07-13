import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchfilterComponent } from './components/searchfilter/searchfilter.component';
import { WorkoutformComponent } from './components/workoutform/workoutform.component';
import { ProgresschartComponent } from './components/progresschart/progresschart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SearchfilterComponent,WorkoutformComponent,ProgresschartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-challenge-tracker';
}
