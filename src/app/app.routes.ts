import { Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { SassPracticeComponent } from './pages/sass-practice/sass-practice.component';
import { BasicCssAndMouseInteractiveComponent } from './pages/basic-css-and-mouse-interactive/basic-css-and-mouse-interactive.component';
import { AnimationPracticeComponent } from './pages/animation-practice/animation-practice.component';

export const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'sass-practice',
    component: SassPracticeComponent
  },
  {
    path: 'css-interactive',
    component: BasicCssAndMouseInteractiveComponent
  },
  {
    path: 'animation-practice',
    component: AnimationPracticeComponent
  }
];
