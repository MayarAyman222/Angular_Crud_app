import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
interface User{
  id: number,
  name : string,
  email:string,
  title:string,
  body:string
};

@Component({
  selector: 'app-read-users',
  imports: [ CommonModule],
  templateUrl: './read-users.component.html',
  styleUrl: './read-users.component.css'
})
export class ReadUsersComponent {
  user!:User
  constructor (public router:Router , public route:ActivatedRoute){}
ngOnInit():void{
let id= Number((this.route.snapshot.paramMap.get('id'))||0);
let users:User []=JSON.parse(localStorage.getItem("users")||"[]");
 this.user = users.find((user) => {
  
    return user.id == id ;

 })!;
}
back(){
  this.router.navigate([''])
}
}