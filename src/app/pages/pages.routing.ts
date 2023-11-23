import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages/pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { AuthGuard } from "../guards/auth.guard";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
          { 
            path: '',
            component: DashboardComponent
          },
          { 
            path: 'progress',
            component: ProgressComponent
          },
          { 
            path: 'graph1',
            component: Graph1Component
          },
          { 
            path: 'account-settings',
            component: AccountSettingsComponent
          },
         
        ]
      },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class pagesRoutingModule{}