import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { SearchComponent } from './search/search.component';
import { SwiftComponent } from './swift/swift.component';

const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'account',component:AccountComponent},
{path:'search',component:SearchComponent},
{path:'swift' ,component:SwiftComponent},
{path:'swift/:id' ,component:SwiftComponent},
{path:'play' ,component:PlayComponent},
{path:'play/:key' ,component:PlayComponent},
{path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
