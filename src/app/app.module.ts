import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './state/task/task.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
const ROUTES = [HomeComponent];
const COMPONENTS = [TaskListComponent];
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...COMPONENTS,
    ...ROUTES,
    StoreModule.forRoot({ tasks: tasksReducer }),
    StoreDevtoolsModule,
    RouterModule,
    RouterOutlet,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
