import { Component } from '@angular/core';
import { MaterialsService } from 'src/app/services/fetch/materials.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-tag-materials',
  templateUrl: './tag-materials.component.html',
  styleUrls: ['./tag-materials.component.css'],
})
export class TagMaterialsComponent {
  filters: string = '';

  constructor(
    private sharedService: SharedService,
    private materialsService: MaterialsService
  ) {
    this.filters = this.sharedService.filters;
  }

  deleteFilterClick(index: number) {
    /*this.sharedService.removeFilter(index);*/
    this.materialsService.filterData(this.sharedService.filters);
  }
}
