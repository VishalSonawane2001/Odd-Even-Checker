import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OddEvenComponent } from './odd-even/odd-even.component';



const routes: Routes = [{ path: '', component: OddEvenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
