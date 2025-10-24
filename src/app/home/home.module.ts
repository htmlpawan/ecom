import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeComponent } from './home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';

const router:Routes = [
 {path:'', component:HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeProductsComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class HomeModule { }
