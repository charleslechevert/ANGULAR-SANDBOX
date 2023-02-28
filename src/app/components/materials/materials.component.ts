import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MaterialsService } from 'src/app/services/fetch/materials.service';
import { Material } from '../../Material';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent {
  filteredMaterials: Array<any> = [];
  materials: Array<any> = [];
  filters: Array<any> = [];

  constructor(
    private materialsService: MaterialsService,
    private sharedService: SharedService
  ) {
    setTimeout(() => {
      this.filteredMaterials = materialsService.filteredMaterials;
    }, 100);
  }

  ngOnInit(): void {
    this.materialsService.dataEmitter.subscribe((value) => {
      this.filteredMaterials = value;
    });
  }
}
