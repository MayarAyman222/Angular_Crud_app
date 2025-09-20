import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddAndReadComponent } from './add_and_read_user/add-and-read/add-and-read.component';
import { EditComponent } from './edit_user/edit/edit.component';
import { ReadUsersComponent } from './read_more/read-users/read-users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , AddAndReadComponent,EditComponent,ReadUsersComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';
}
