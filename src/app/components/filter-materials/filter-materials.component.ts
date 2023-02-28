import { Component } from '@angular/core';
import { MaterialsService } from 'src/app/services/fetch/materials.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-filter-materials',
  templateUrl: './filter-materials.component.html',
  styleUrls: ['./filter-materials.component.css'],
})
export class FilterMaterialsComponent {
  newFilter: Array<any> = [];
  filteredMaterials: Array<any> = [];
  filters: string = '';

  options = [
    'Carbon V5 Shied',
    'Titanium Shield',
    'Steel Protection',
    'Plastic Cover',
    'Aluminium Shield',
    'Titanium Max 9000',
  ];

  constructor(
    private sharedService: SharedService,
    private materialsService: MaterialsService
  ) {
    this.filters = this.sharedService.filters;
  }

  onOptionSelected(): any {
    this.sharedService.addFilter(this.newFilter);
    this.materialsService.filterData(this.sharedService.filters);
  }
}
