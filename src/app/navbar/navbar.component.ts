import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imageUrl : string =  "../../assets/logo.png"
  toggle : boolean   = false;


  show = ()=>{
      this.toggle = !this.toggle
  }
  hide = () =>{
      this.toggle = false
  }
}
