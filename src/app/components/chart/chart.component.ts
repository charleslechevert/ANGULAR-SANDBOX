import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/fetch/materials.service';
import Chart from 'chart.js/auto';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as moment from 'moment';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  filteredMaterials: Array<any> = [];
  filters: string = '';
  chart: any;
  title: string = 'PICK A MATERIAL';

  constructor(
    private materialsService: MaterialsService,
    sharedService: SharedService
  ) {
    setTimeout(() => {
      this.filteredMaterials = materialsService.filteredMaterials;
      this.filters = sharedService.filters;
      this.chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: [],
          datasets: [],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, 100);
  }

  arrangeData(data: any) {
    const sortedData: any = {};

    this.filteredMaterials.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA.getTime() - dateB.getTime();
    });

    sortedData.label = this.filters;
    sortedData.cost = this.filteredMaterials.map((item) => {
      return item.cost;
    });

    sortedData.greencost = this.filteredMaterials.map((item) => {
      return item.greencost;
    });

    sortedData.labels = this.filteredMaterials.map((item) =>
      moment(item.shippingdate).format('DD/MM/YYYY')
    );

    return sortedData;
  }

  ngOnInit() {
    this.materialsService.dataEmitter.subscribe((value) => {
      this.filteredMaterials = value;
      const sortedData = this.arrangeData(this.filteredMaterials);
      this.chart.destroy();
      this.chart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: sortedData.labels,
          datasets: [
            {
              label: 'Cost',
              data: sortedData.cost,
              backgroundColor: '#02490a',
              borderColor: '#02490a',
              borderWidth: 1,
            },
            {
              label: 'Green Cost',
              data: sortedData.greencost,
              backgroundColor: '#53d196',
              borderColor: '#53d196',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }
}
