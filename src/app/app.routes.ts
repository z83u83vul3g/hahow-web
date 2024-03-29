import { Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { SassPraticeComponent } from './pages/sass-pratice/sass-pratice.component';
import { BasicCssAndMouseInteractiveComponent } from './pages/basic-css-and-mouse-interactive/basic-css-and-mouse-interactive.component';

export const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'sass-pratice',
    component: SassPraticeComponent
  },
  {
    path: 'basic-css-and-mouse-interactive',
    component: BasicCssAndMouseInteractiveComponent
  }
];
