import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public sideBarV: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  openSide() {
    this.sideBarV = true;

    var ele = document.getElementById('sideBar') as HTMLElement;

    ele.classList.add('sideOpen');
  }

  closeSide() {
    this.sideBarV = false;

    var ele = document.getElementById('sideBar') as HTMLElement;

    ele.classList.remove('sideOpen');
  }

  toggleSide() {
    if (this.sideBarV) {
      this.closeSide();
    } else {
      this.openSide();
    }
  }

}
