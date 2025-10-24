import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMainComponent } from './test-main.component';
import { Test1Component } from './test1/test1.component';
import {RouterModule, Routes } from '@angular/router';
import { TestDirectiveDirective } from './test-directive.directive';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test2Component } from './test2/test2.component';

const route:Routes = [
  {path:'', component:TestMainComponent},
  {path:'test1', component:Test1Component}
];

@NgModule({
  declarations: [TestMainComponent, Test1Component, TestDirectiveDirective, CustomPipesPipe, Test2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestMainModule { }
