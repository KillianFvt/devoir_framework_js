import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AddQcmComponent} from "./add-qcm/add-qcm.component";
import {QcmComponent} from "./qcm/qcm.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'qcm/new', component: AddQcmComponent },
  { path: 'qcm/:id', component: QcmComponent },
];
