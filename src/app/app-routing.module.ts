import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {
    path: "",
    component: RoomsComponent
  },
  {
    path: "bookings",
    pathMatch: "full",
    component: MybookingsComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedComponents = [
  RoomsComponent,
  MybookingsComponent,
  PageNotFoundComponent
];
