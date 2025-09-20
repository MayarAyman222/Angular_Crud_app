
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-edit',
  imports:[FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user!: User;
  users: User[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
   
    const id = Number(this.route.snapshot.paramMap.get('id'));

  
    this.users = JSON.parse(localStorage.getItem('users') || '[]');

   
    const found = this.users.find(u => u.id === id);
    if (found) {
      this.user = { ...found };   
    }
  }

  saveChanges() {
    const index = this.users.findIndex(u => u.id === this.user.id);

    if (index !== -1) {
      this.users[index] = this.user;  
      localStorage.setItem('users', JSON.stringify(this.users));
    }

    
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}
