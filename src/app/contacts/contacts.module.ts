import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListComponent, AddComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [AddComponent, ListComponent, ViewComponent],
})
export class ContactsModule { }
