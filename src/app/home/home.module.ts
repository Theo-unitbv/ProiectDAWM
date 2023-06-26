import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [HomeComponent, AddMovieComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    NzIconModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzModalModule,
    MatSelectModule,
    FormsModule,
    NzSelectModule,
  ],
})
export class HomeModule {}
