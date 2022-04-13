import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuipuxProject';

  public location = '';
  
  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd){
        this.location= router.url.replace('/','');
      }
    });
  }

  ngOnInit(): void {
  }
}
