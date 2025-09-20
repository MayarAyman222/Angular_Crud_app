import { Routes } from '@angular/router';
import { AddAndReadComponent } from './add_and_read_user/add-and-read/add-and-read.component';


import { EditComponent } from './edit_user/edit/edit.component';
import { ReadUsersComponent } from './read_more/read-users/read-users.component';

export const routes: Routes = [
   {path : ""  , component : AddAndReadComponent},
    {path : 'edit/:id'  , component : EditComponent},
     {path : 'readmore/:id'  , component : ReadUsersComponent}
];
