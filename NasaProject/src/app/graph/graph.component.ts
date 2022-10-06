import { Component, OnDestroy, OnInit } from '@angular/core';
import { dataTool, number } from 'echarts';
import mission from '../db/mission.json';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
  options: any;
  constructor() {
  }

  getJson(valeur: number) {
    return mission[valeur];
  }

  getTable() {
    var data = [];
    data.push({
      name: 'Terre',
      x: 0,
      y: 0
    },)

    for (let i: number = 0; i < mission.length; i++) {
      data.push({
        name: mission[i].star_name,
        x: mission[i].st_dist,
        y: i * Math.LN2,
      },);
    }

    return data;

  }

  getTableLink() {
    var data1 = [];
    data1.push({
      source: 0,
      target: 1,
      symbolSize: [0, 0],
      label: {
        show: false,
      }
    },)

    for (let i: number = 0; i < mission.length; i++) {
      data1.push({
        source: 'Terre',
        target: mission[i].star_name,
      },)
    }

    return data1;
  }

  getStellarColor() {
    var data2 = [];
    data2.push('aliceblue')

    for (let i: number = 0; i < mission.length; i++) {
      if (mission[i].st_bmvsrc === "BVT-Red") {
        data2.push('darkred')
      } else if (mission[i].st_bmvsrc === "BVT-Blue") {
        data2.push('cadetblue')
      } else {
        data2.push('chartreuse')
      }
    }



    return data2;

  }


  ngOnInit(): void {



    console.log(this.getStellarColor());
    this.options = {
      title: {
        text: '',
      },
      color: 'white',
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 125,
          roam: false,
          label: {
            show: true,
            fontSize: 20

          },
          edgeSymbol: ['circle', 'arrow'],
          color: 'darkred',
          edgeSymbolSize: [2, 5],

          edgeLabel: {
            textStyle: {
              fontSize: 80,
            }
          },
          data: this.getTable(),
          // links: [],
          links: this.getTableLink(),

          lineStyle: {
            opacity: 1,
            color: 'white',
            width: 2,
            curveness: 0,
          }
        }
      ]
    };
  }
}