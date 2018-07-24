import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import {ChartService} from "../chart.service"
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  BarChart:any=[];
  
  
  cards = [
    {cols: 2, rows: 1 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 },
    {cols: 1, rows: 1 }
  ];
  
  
  
  
  constructor(private http: HttpClient, private chart:ChartService ) { }

  ngOnInit() {
    
  
}

portfolio(){
this.chart.showPortfolio();
}
}

