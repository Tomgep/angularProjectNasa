import { Component, OnInit } from '@angular/core';
import { ConfigServiceETH, ConfigServiceEvent } from '../services/config.service';

@Component({
  selector: 'app-incident-terrestre',
  templateUrl: './incident-terrestre.component.html',
  styleUrls: ['./incident-terrestre.component.scss']
})
export class IncidentTerrestreComponent implements OnInit {

  iciweb: any
  icicrypto: any

  constructor(private configServiceEvent: ConfigServiceEvent,
    private configServiceETH: ConfigServiceETH) {
  }

  ngOnInit(): void {

    this.configServiceEvent.getConfig2().subscribe((reponse2: any) => {
      this.iciweb = reponse2;

    });

    this.configServiceETH.getConfig3().subscribe((reponse3: any) => {
      this.icicrypto = reponse3;

    });

    console.log(this.iciweb)
  }
}