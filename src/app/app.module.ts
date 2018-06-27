import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { metaReducers, reducers } from './reducers';
import { AuthEffects } from './store/auth/auth.effects';
import { Error404Component } from './views/error404.component';
import { ProjectModule } from './views/project/project.module';
import { UsersModule } from './views/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    Error404Component,
  ],
  imports: [
    ProjectModule,
    BrowserModule,
    BrowserAnimationsModule,
    UsersModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
