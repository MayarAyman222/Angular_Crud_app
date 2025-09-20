import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface User{
  id: number,
  name : string,
  email:string,
  title:string,
  body:string
};

@Component({
  selector: 'app-add-and-read',
  imports: [FormsModule , CommonModule],
  templateUrl: './add-and-read.component.html',
  styleUrl: './add-and-read.component.css'
})
export class AddAndReadComponent {
  users:User [] =[];
  newUser:User={
    id:0,
    name:"",
    email:"",
    title: "",
    body:""
  }
ngOnInit(): void {
  let savedusers = localStorage.getItem("users");
  if(savedusers){
   this.users= JSON.parse(savedusers);
  }
  else{
    this.users=[];
  }
}
constructor(public router:Router){

}
savelocalstorage(){
  localStorage.setItem("users",JSON.stringify(this.users))
}
adduser(){
  if(!(this.newUser.name && this.newUser.email&&this.newUser.title&&this.newUser.body)){
    return;}

    else{
       this.newUser.id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push(this.newUser);
      this.savelocalstorage();
      this.newUser={
        id:0,
        name:"",
        email:"",
        title:"",
        body:""
      }
    }
  }
deleteuser(id:number){
  for(let i=0 ; i<this.users.length; i++){
    if(id==this.users[i].id){
      this.users.splice(i,1);
      this.savelocalstorage();
      break
    }
  }
}
edituser(id:number){
  this.router.navigate(['/edit',id])
}
readmore(id:number){
  this.router.navigate(['/readmore',id])
}
}