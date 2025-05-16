import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';
import { AerolineaDetailComponent } from './aerolinea-detail/aerolinea-detail.component';
import { VuelosModule } from '../vuelos/vuelos.module';

@NgModule({
  imports: [CommonModule, VuelosModule],
  declarations: [AerolineaListComponent, AerolineaDetailComponent],
  exports: [AerolineaListComponent],
})
export class TrainerModule {}
