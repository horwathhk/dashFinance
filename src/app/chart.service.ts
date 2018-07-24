import { Injectable } from '@angular/core';
import { Chart } from "chart.js";
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class ChartService {
      LineChart:any;
      BarChart:any;

  constructor() { }

  makeChartOpen(price){
    this.LineChart = new Chart('intraDailyOpenLineChart', {
      type:'line',
    data:{
      labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label:"Intra-daily Opening Prices",
        data:price,
        fill:true,
        lineTension:0.2,
        borderColor:"#336B87",
        borderWidth:1
    }]
    },
    options: {
      title:{
        display:true
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:false
          }
        }]
    }
    }
    }
    )}

    
  makeChartIntraDailyHighLow(high, low){
      this.LineChart = new Chart("intraDailyHighLowLineChart", {
        type:'line',
      data:{
        labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label:"Intra-daily High Prices",
          data:high,
          fill:true,
          lineTension:0.2,
          borderColor:"#336B87",
          borderWidth:1
      }, {
        label:"Intra-daily Low Prices",
          data:low,
          fill:false,
          lineTension:0.2,
          borderColor:"#2A3132",
          borderWidth:1
      }
    ]
      },
      options: {
        title:{
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:false
            }
          }]
      }
      }
      }
      )}
      
  makeDailyChartOpen(price){
        this.LineChart = new Chart('dailyOpenLineChart', {
          type:'line',
        data:{
          labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label:"Daily Open Prices",
            data:price,
            fill:true,
            lineTension:0.2,
            borderColor:"#336B87",
            borderWidth:1
        }]
        },
        options: {
          title:{
            display:true
          },
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:false
              }
            }]
        }
        }
        }
        )}
  makeChartDailyHighLow(high, low){
          this.LineChart = new Chart("dailyHighLowLineChart", {
            type:'line',
          data:{
            labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
              label:"Daily High Prices",
              data:high,
              fill:true,
              lineTension:0.2,
              borderColor:"#336B87",
              borderWidth:1
          }, {
            label:"Daily Low Prices",
              data:low,
              fill:false,
              lineTension:0.2,
              borderColor:"#2A3132",
              borderWidth:1
          }
        ]
          },
          options: {
            title:{
              display:true
            },
            scales:{
              yAxes:[{
                ticks:{
                  beginAtZero:false
                }
              }]
          }
          }
          }
          )}
  
//END OF STOCK ONE 

makeChartOpen2(price){
  this.LineChart = new Chart('intraDailyOpenLineChart2', {
    type:'line',
  data:{
    labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label:"Intra-daily Opening Prices stock 2",
      data:price,
      fill:true,
      lineTension:0.2,
      borderColor:"#336B87",
      borderWidth:1
  }]
  },
  options: {
    title:{
      display:true
    },
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:false
        }
      }]
  }
  }
  }
  )}

makeChartIntraDailyHighLow2(high, low){
    this.LineChart = new Chart("intraDailyHighLowLineChart2", {
      type:'line',
    data:{
      labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label:"Intra-daily High Prices stock 2",
        data:high,
        fill:true,
        lineTension:0.2,
        borderColor:"#336B87",
        borderWidth:1
    }, {
      label:"Intra-daily Low Prices stock 2",
        data:low,
        fill:true,
        lineTension:0.2,
        borderColor:"#2A3132",
        borderWidth:1
    }
  ]
    },
    options: {
      title:{
        display:true
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:false
          }
        }]
    }
    }
    }
    )}
    
makeDailyChartOpen2(price){
      this.LineChart = new Chart('dailyOpenLineChart2', {
        type:'line',
      data:{
        labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label:"Daily Open Prices stock2",
          data:price,
          fill:true,
          lineTension:0.2,
          borderColor:"#336B87",
          borderWidth:1
      }]
      },
      options: {
        title:{
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:false
            }
          }]
      }
      }
      }
      )}

makeChartDailyHighLow2(high, low){
        this.LineChart = new Chart("dailyHighLowLineChart2", {
          type:'line',
        data:{
          labels:["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label:"Daily High Prices stock2",
            data:high,
            fill:true,
            lineTension:0.2,
            borderColor:"#336B87",
            borderWidth:1
        }, {
          label:"Daily Low Prices Stock 2",
            data:low,
            fill:true,
            lineTension:0.2,
            borderColor:"#2A3132",
            borderWidth:1
        }
      ]
        },
        options: {
          title:{
            display:true
          },
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:false
              }
            }]
        }
        }
        }
        )}


//Portfolio Compontent
showPortfolio(){
this.BarChart = new Chart("portfolioChart",{
  type: 'bar',
  data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
})
}



        
      
      
      
      
      
      
      }
