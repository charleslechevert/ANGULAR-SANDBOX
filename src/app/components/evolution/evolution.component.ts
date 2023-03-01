import { Component } from '@angular/core';
import { MaterialsService } from 'src/app/services/fetch/materials.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.css'],
})
export class EvolutionComponent {
  filteredMaterials: Array<any> = [];
  sortedData: any = {
    spreadDays: '',
    costEvol: '',
    greenCostEvol: '',
  };

  constructor(
    private materialsService: MaterialsService,
    sharedService: SharedService
  ) {
    setTimeout(() => {
      this.filteredMaterials = materialsService.filteredMaterials;
    }, 100);
  }

  sortData(data: any) {
    data.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateA.getTime() - dateB.getTime();
    });

    const OldestData = data[0];
    const NewestData = data[data.length - 1];

    //Spread Days
    const date1 = new Date(OldestData.shippingdate);
    const date2 = new Date(NewestData.shippingdate);
    const diffInMs = Math.abs(date1.getTime() - date2.getTime());
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    //Cost Evol
    const costEvol = (NewestData.cost - OldestData.cost) / OldestData.cost;

    //GreenCost Evol
    const greenCostEvol =
      (NewestData.greencost - OldestData.greencost) / OldestData.greencost;

    //GreenCost Evol
    return {
      spreadDays: diffInDays,
      costEvol: costEvol,
      greenCostEvol: greenCostEvol,
    };
  }

  ngOnInit() {
    this.materialsService.dataEmitter.subscribe((value) => {
      this.filteredMaterials = value;

      this.sortedData = this.sortData(this.filteredMaterials);
    });
  }
}
