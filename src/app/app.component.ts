import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatsService } from './stats.service';
import { THIS_EXPR } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { Chart } from "chart.js";
import {ChartService} from "./chart.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  url:string = "https://www.alphavantage.co/query?";
  query:string = "function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo";
  openPrices:number []=[];
  openPrice:number;
  time:any;
  api_key:string = "JT2L6QCSK20YVNDL";
  response:any;
  LineChart:any=[];
  

 
  

  constructor(private http: HttpClient, private chart:ChartService ) { }

  ngOnInit(){}
//       this.http.get(this.url + this.intradayQueryBuilding("AAPL"))
//       .subscribe((response) => {
//       this.response = response;
//       this.time = this.response["Time Series (1min)"];
//       //console.log(this.time);
//       for(var i=0;i<this.time;i++){
//         this.openPrice = this.time[i]['1. open'];
//         this.openPrices.push(this.openPrice);
//       }
//       // for(var item in this.time){
//       //   this.openPrice = (this.time[item]['1. open']);
//       //   this.openPrices.push(this.openPrice);
//       // }
//       //console.log("this is the array " + this.openPrices);
//       //this.chart.makeChart(this.openPrice);
//       }
//     )
//   }
   

//   intradayQueryBuilding(stock){
//     let stockType = "symbol=" + stock;
//     let queryType:string="function=TIME_SERIES_INTRADAY";
//     let interval = "interval=1min";
//     return queryType + "&" + interval + "&" + stockType + "&" + "apikey=" + this.api_key; 
//   }

  

}
