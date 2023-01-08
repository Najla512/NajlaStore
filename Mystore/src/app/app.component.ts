import { Component } from '@angular/core';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mystore';
  constructor(private localStore: LocalService){}
}
