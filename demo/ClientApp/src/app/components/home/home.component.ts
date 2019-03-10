import { Component, OnInit } from '@angular/core';
import { ApplicationsService, Application } from '../../services/applications.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  data:Application[];
  error:string = null;
  hasError:boolean = false;

  constructor(private appService:ApplicationsService) {
  }

  ngOnInit() {
    this.appService.getInfo((data:Application[])=>{
        this.hasError = false;
        this.data = data;
    }, (err)=>{
        this.hasError = true;
        this.error = `Ups!!! An error has ocurred: ${err}`;
    });
  }
}
