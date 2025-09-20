/*import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
interface User{
  id: number,
  name : string,
  email:string,
  title:string,
  body:string
};
@Component({
  selector: 'app-edit',
  imports: [FormsModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {
user!:User
constructor(public router:Router , public route:ActivatedRoute){}
ngOnInit():void{
  let userid =Number(this.route.snapshot.paramMap.get("id")||0);
  let users:User []=JSON.parse(localStorage.getItem("users")||"[]")
 
    this.user = users.find((user: User) => user.id == userid)!;
}
 saveChanges() {
    // دورنا على index بتاع الـ user اللي بيتعدل
    const index = this.users.findIndex(u => u.id === this.user.id);

    if (index !== -1) {
      this.users[index] = this.user; // حفظ التعديلات
      localStorage.setItem('users', JSON.stringify(this.users));
    }

}
*/
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
