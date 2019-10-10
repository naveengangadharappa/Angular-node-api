import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './public/calculator.component';
import { GameComponent } from './public/game.component';
import { DispuserComponent } from './public/dispuser.component';
import { FormsModule } from '@angular/forms';
import { FreeApiServices } from './services/freeapiservice';
import { FileUploadModule} from 'ng2-file-upload';
import { InsertComponent } from './public/insert.component';
import { UpdateComponent } from './public/update.component';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    GameComponent,
    DispuserComponent,
    InsertComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [FreeApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
