import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nasa: any

  constructor(private configService: ConfigService) {
  }

  ngOnInit(): void {

    this.configService.getConfig().subscribe((reponse: any) => {
      this.nasa = reponse;
    })
  }




}
