import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentracComponent } from './centrac/centrac.component';
import { CustaccsComponent } from './custaccs/custaccs.component';
import { DashComponent } from './dash/dash.component';
import { OpsPolComponent } from './ops-pol/ops-pol.component';
import { OpsSarComponent } from './ops-sar/ops-sar.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { PolicyComponent } from './policy/policy.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'centrac', component: CentracComponent},
  {path: 'custaccs', component: CustaccsComponent},
  {path: 'dash', component: DashComponent },
  {path: 'ops-pol', component: OpsPolComponent},
  {path: 'ops-sar', component: OpsSarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
