import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Material } from '../../Material';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  private apiUrl = 'http://localhost:4201/materials';
  materials: Material[] = [];
  filteredMaterials: Material[] = [];

  constructor(private http: HttpClient) {
    this.getMaterials().subscribe((materials: any) => {
      this.filteredMaterials = materials;
      this.materials = materials;
    });
  }

  dataEmitter = new Subject<any>();

  raiseDataEmitterEvent(filteredMaterials: any) {
    this.dataEmitter.next(filteredMaterials);
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }

  filterData(filters: any) {
    if (filters.length > 0) {
      this.filteredMaterials = this.materials.filter((item) =>
        filters.includes(item.label)
      );
    } else {
      this.filteredMaterials = this.materials;
    }

    this.raiseDataEmitterEvent(this.filteredMaterials);
  }
}
