import { Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { SassPraticeComponent } from './pages/sass-pratice/sass-pratice.component';

export const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'sass-pratice',
    component: SassPraticeComponent
  }
];
