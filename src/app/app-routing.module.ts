import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    {
        path: 'work',
        component: WorkComponent,
        // children: [
        //     { path: 'add', component: ProductAddEditComponent },
        //     { path: 'edit/:id', component: ProductAddEditComponent }
        // ]
    },
    { path: 'skills', component: SkillsComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = 
[HomeComponent, AboutComponent, WorkComponent, SkillsComponent];