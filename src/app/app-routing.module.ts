import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageOverviewComponent } from './imageOverview.component';
import { ImageDetailsComponent } from './imageDetails.component';


const routes: Routes = [
    { path: '', component: ImageOverviewComponent },
    { path: 'image/:id', component: ImageDetailsComponent }
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
