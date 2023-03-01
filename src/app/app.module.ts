import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { FilterMaterialsComponent } from './components/filter-materials/filter-materials.component';
import { ChartComponent } from './components/chart/chart.component';
import { TagMaterialsComponent } from './components/tag-materials/tag-materials.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvolutionComponent } from './components/evolution/evolution.component';
import { PercentPipe } from './pipe/percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaterialsComponent,
    ChartComponent,
    TagMaterialsComponent,
    EvolutionComponent,
    FilterMaterialsComponent,
    PercentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
