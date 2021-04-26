import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { BaiTap2Component } from './bai-tap2.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SliderComponent } from './index-component/slider/slider.component';
import { IndexContentComponent } from './index-component/index-content/index-content.component';
import { ItemComponent } from './index-component/index-content/item/item.component';



@NgModule({
  declarations: [
    HeaderComponentComponent,
    IndexComponentComponent,
    BaiTap2Component,
    FooterComponentComponent,
    SliderComponent,
    IndexContentComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaiTap2Component
  ]
})
export class BaiTap2Module { }
