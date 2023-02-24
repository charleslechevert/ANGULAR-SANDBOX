import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Material} from '../Material'
import { materialData } from '../material-data'

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor() { }

  getMaterials(): Observable<Material[]> {
    const materials = of(materialData)
    return materials;
  }
}
