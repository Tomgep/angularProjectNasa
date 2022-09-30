import { Component, OnDestroy, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})


export class GraphComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit(): void {

    this.options = {
      title: {
        text: 'Distance Objets Stellaires Par Rapport à la Terre'
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 160,
          roam: false,
          label: {
            show: true,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [5, 10],
          edgeLabel: {
            textStyle: {
              fontSize: 50,
            },
          },
          data: [{
            name: 'Terre',
            x: 0,
            y: 0
          }, {
            name: 'Node 2',
            x: 800,
            y: 300
          }, {
            name: 'Node 3',
            x: 550,
            y: 100
          }, {
            name: 'Node 4',
            x: 550,
            y: 500
          }],
          // links: [],
          links: [{
            source: 0,
            target: 1,
            symbolSize: [0, 0],
            label: {
              show: false,
            },

          }, {
            source: 'Terre',
            target: 'Terre'
          }, {
            source: 'Node 2',
            target: 'Terre'
          }, {
            source: 'Node 3',
            target: 'Terre'
          }, {
            source: 'Node 4',
            target: 'Terre'
          }],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          }
        }
      ]
    };
  }
}