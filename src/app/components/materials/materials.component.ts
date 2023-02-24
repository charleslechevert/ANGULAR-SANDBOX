import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials.service';
import {Material} from '../../Material'



@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

    materials : Material[] = []


    constructor(private materialsService: MaterialsService) {}

    ngOnInit(): void {
      this.materialsService.getMaterials().subscribe((materials) =>(this.materials = materials))
    }
}
