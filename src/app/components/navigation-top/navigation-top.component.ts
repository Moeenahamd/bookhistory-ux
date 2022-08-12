import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.scss']
})
export class NavigationTopComponent implements OnInit {

  constructor(private dataService: DataService) { }
  navCheck: any = false;
  ngOnInit(): void {
    this.getSelected()
  }
  getSelected() {
    this.dataService.home.subscribe(
      data => 
      {
        this.navCheck = data;
      }
    );
  } 

  checkHomePage(val:boolean){
    this.dataService.setHome(val);
  }

}
