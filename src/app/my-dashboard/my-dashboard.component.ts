import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options} from '../options';
import { FormsModule }   from '@angular/forms';
import { Chart } from "chart.js";
import {ChartService} from "../chart.service"

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  //selectStats:string = selectStats.value;
 options: Options[];
 optionSelected:any;

  url:string = "https://www.alphavantage.co/query?";
  query:string = "function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo";
  
//https://www.youtube.com/watch?v=pcOaAU_iaD4


  //stock 1
  stock1: string;
  openPrices=[];
  openPrice:number;
  highs:number []=[];
  high:number;
  lows:number []=[];
  low:number;

  dailyOpenPrices=[];
  dailyOpenPrice:number;
  dailyHighs:number []=[];
  dailyHigh:number;
  dailyLows:number []=[];
  dailyLow:number;
//end stock 1
//stock 2
stock2: string;
openPrices2=[];
  openPrice2:number;
  highs2:number []=[];
  high2:number;
  lows2:number []=[];
  low2:number;

  dailyOpenPrices2=[];
  dailyOpenPrice2:number;
  dailyHighs2:number []=[];
  dailyHigh2:number;
  dailyLows2:number []=[];
  dailyLow2:number;
  
  //end of stock 2


  time:any;
  api_key:string = "JT2L6QCSK20YVNDL";
  response:any;
  LineChart:any=[];
  BarChart:any=[];

  showIntraGraphs:boolean;
  showDailyGraphs:boolean; 
  
  cards = [
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 }
  ];


constructor(private http: HttpClient, private chart:ChartService ) { }

ngOnInit(){
  this.options=[
    {Name: "Intraday",Value:0 },
    {Name:"Daily",Value:1}
    
];

this.optionSelected = 0;


}

search(){
  console.log('compare' + this.optionSelected);
if(this.optionSelected == 0){
  this.showIntraGraphs = true;
  this.showDailyGraphs = false;
  
  this.http.get(this.url + this.intradayQueryBuildingOpen(this.stock1))
  .subscribe((response) => {
  this.response = response;
  this.time = this.response["Time Series (1min)"];
  console.log(this.time);
  for(var obj in this.time){
     this.openPrice = this.time[obj]['1. open'];
     this.openPrices.push(this.openPrice);
      console.log("stock 1 intradaily open prices: " + this.openPrices);
      this.high = (this.time[obj]['2. high']);
      this.highs.push(this.high);
      console.log("stock 1intradaily High prices:" + this.highs);
      this.low = (this.time[obj]['3. low']);
      this.lows.push(this.low);  
      console.log("stock 1 intradaily low prices:" + this.lows);
  }
  this.chart.makeChartOpen(this.openPrices);
  this.chart.makeChartIntraDailyHighLow(this.highs, this.lows);
  }
)
} else{
  if(this.optionSelected == 1){
    this.showIntraGraphs = false;
    this.showDailyGraphs = true;
    this.http.get(this.url + this.dailyQueryBuildingHigh(this.stock1))
    .subscribe((response) => {
    this.response = response;
    this.time = this.response["Time Series (Daily)"];
    console.log(this.time);
    for(var obj in this.time){
       this.dailyOpenPrice = this.time[obj]['1. open'];
       this.dailyOpenPrices.push(this.dailyOpenPrice);
        console.log("stock 1 daily open prices: " + this.dailyOpenPrices);
        this.dailyHigh = (this.time[obj]['2. high']);
        this.dailyHighs.push(this.dailyHigh);
        console.log("stock 1 daily high prices:" + this.dailyHighs);
        this.dailyLow = (this.time[obj]['3. low']);
        this.dailyLows.push(this.dailyLow);  
        console.log("stock 1 daily low prices:" + this.dailyLows);
    }
    this.chart.makeDailyChartOpen(this.dailyOpenPrices);
    this.chart.makeChartDailyHighLow(this.highs, this.lows);
    }
  )
  }
}//end of if statement 1

if(this.optionSelected == 0){
  this.showIntraGraphs = true;
  this.showDailyGraphs = false;
  
  this.http.get(this.url + this.intradayQueryBuildingOpen(this.stock2))
  .subscribe((response) => {
  this.response = response;
  this.time = this.response["Time Series (1min)"];
  console.log(this.time);
  for(var obj in this.time){
     this.openPrice2 = this.time[obj]['1. open'];
     this.openPrices2.push(this.openPrice2);
      console.log("stock 2 open prices: " + this.openPrices);
      this.high2 = (this.time[obj]['2. high']);
      this.highs2.push(this.high2);
      console.log("stock 2 High prices:" + this.highs2);
      this.low2 = (this.time[obj]['3. low']);
      this.lows2.push(this.low2);  
      console.log("stock2 low prices:" + this.lows2);
  }
  this.chart.makeChartOpen2(this.openPrices2);
  this.chart.makeChartIntraDailyHighLow2(this.highs2, this.lows2);
  }
)
} else{
  if(this.optionSelected == 1){
    this.showIntraGraphs = false;
    this.showDailyGraphs = true;
    this.http.get(this.url + this.dailyQueryBuildingHigh(this.stock2))
    .subscribe((response) => {
    this.response = response;
    this.time = this.response["Time Series (Daily)"];
    console.log(this.time);
    for(var obj in this.time){
       this.dailyOpenPrice2 = this.time[obj]['1. open'];
       this.dailyOpenPrices2.push(this.dailyOpenPrice2);
        console.log("stock 2 open prices: " + this.dailyOpenPrices);
        this.dailyHigh2 = (this.time[obj]['2. high']);
        this.dailyHighs2.push(this.dailyHigh2);
        console.log("stock 2 high prices:" + this.dailyHighs);
        this.dailyLow2 = (this.time[obj]['3. low']);
        this.dailyLows2.push(this.dailyLow2);  
        console.log("stock 2 low prices:" + this.dailyLows2);
    }
    this.chart.makeDailyChartOpen2(this.dailyOpenPrices2);
    this.chart.makeChartDailyHighLow2(this.highs2, this.lows2);
    }
  )
  }//end of second
}//end of if statement 1

}//end of seach


intradayQueryBuildingOpen(stock){
let stockType = "symbol=" + stock;
let queryType:string="function=TIME_SERIES_INTRADAY";
let interval = "interval=1min";
return queryType + "&" + interval + "&" + stockType + "&" + "apikey=" + this.api_key; 
}

dailyQueryBuildingHigh(stock){
  let stockType = "symbol=" + stock;
  let queryType:string="function=TIME_SERIES_DAILY";
  let interval = "interval=1min";
  return queryType + "&" + interval + "&" + stockType + "&" + "apikey=" + this.api_key; 
  }

click(){
  console.log(this.stock1);
  console.log(this.stock2);

}

}
