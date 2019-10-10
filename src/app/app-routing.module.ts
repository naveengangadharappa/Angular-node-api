import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './public/calculator.component';
import { GameComponent } from './public/game.component';
import { DispuserComponent } from './public/dispuser.component';
import { InsertComponent } from './public/insert.component';
import { UpdateComponent } from './public/update.component';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'calc', component: CalculatorComponent },
  { path: 'game', component: GameComponent },
  { path: 'dispuser', component: DispuserComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'update', component: UpdateComponent },
  { path:'login',component:LoginComponent},
  {path:'nav',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CalculatorComponent, GameComponent, DispuserComponent, InsertComponent];
