import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, Optional } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';

  role = 'Admin';

  @ViewChild('user', { read: ViewContainerRef} ) vcr! : ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }

  constructor(@Optional() private LoggerService: LoggerService) {}


  ngOnInit() {
    this.LoggerService?.log('AppComponent.ngOnInit()')
  }
}
