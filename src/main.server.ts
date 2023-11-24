import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { DashboardComponent } from './app/dashboard.component';

const bootstrap = () => bootstrapApplication(DashboardComponent, config);

export default bootstrap;
