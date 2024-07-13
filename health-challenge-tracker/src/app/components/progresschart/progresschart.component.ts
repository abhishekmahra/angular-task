import { Component } from '@angular/core';
import { registerables } from 'chart.js';
import {Chart} from 'chart.js'

Chart.register(...registerables)

@Component({
  selector: 'app-progresschart',
  standalone: true,
  imports: [],
  templateUrl: './progresschart.component.html',
  styles: ''
})

export class ProgresschartComponent {
  constructor() { 

  }

  ngOnInit(){
    this.RenderChart()
  }

  RenderChart(){
    const mychart = new Chart("workoutChart", {
        type: 'bar',
        data: {
            labels: ['Running', 'Cycling'],
            datasets: [{
                label: 'Minutes',
                data: [30, 45],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

}
