import { Component, OnInit } from '@angular/core';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private serverService : ServerService){}

  ngOnInit(): void {
      
  }

}
