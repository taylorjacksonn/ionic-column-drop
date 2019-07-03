import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {

  }

  openAbout() {
    this.router.navigate(['/about']);
  }
  openExperience() {
      this.router.navigate(['/experience']);  // define your component where you want to go
  }
  openHome(){
    this.router.navigate(['/home']);  // define your component where you want to go
  }
  // openBlog(){
  //   this.router.navigate(['/home']);  // define your component where you want to go
  // }


}
