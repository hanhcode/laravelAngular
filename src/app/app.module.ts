import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { HeaderComponent } from './header/header.component';
import { Post1Component } from './post1/post1.component';
import { Post2Component } from './post2/post2.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    HeaderComponent,
    Post1Component,
    Post2Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:HeaderComponent},
      {path:'post1',component:Post1Component},
      {path:'post2',component:Post2Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
