import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeCatagoriesComponent } from './joke-catagories/joke-catagories.component';
import { JokeService } from './joke.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JokeCatagoryComponent } from './joke-catagory/joke-catagory.component';
import { SubmitJokeComponent } from './submit-joke/submit-joke.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JokeCatagoriesComponent,
    NavbarComponent,
    JokeCatagoryComponent,
    SubmitJokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
