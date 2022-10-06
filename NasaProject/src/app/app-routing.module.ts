import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalSpaceComponent } from './final-space/final-space.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { IncidentTerrestreComponent } from './incident-terrestre/incident-terrestre.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'incident', component: IncidentTerrestreComponent },
  { path: 'finalSpace', component: FinalSpaceComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
