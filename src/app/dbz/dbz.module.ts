import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListsComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPageComponent,
    ListsComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    MainPageComponent
  ]
})
export class DbzModule { }
