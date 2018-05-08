import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutColumnComponent } from './flex-layout-column.component';
import { SideNavComponent } from './side-nav.component';
import { AngularMaterialComponent } from './angular-material.component';
import { AngularRoutingComponent } from './angular-routing.component';
import { RouterNamedOutletComponent } from './router-named-outlet.component';
import { MessaginServiceComponent } from './messagin-service.component';
const routes: Routes = [
  { path: 'column', component: FlexLayoutColumnComponent },
  { path: 'sidenav', component: SideNavComponent },
  { path: 'material', component: AngularMaterialComponent },
  { path: 'messaging', component: MessaginServiceComponent },
  { path: 'routing', component: AngularRoutingComponent, children: [
    { path: 'testOutlet', component: RouterNamedOutletComponent, outlet: 'test' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
