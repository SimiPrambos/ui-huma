(function(){
  'use strict';
  
  var Performance = function(id, type = 'line', options = {}) {
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Orders = function(id, type = 'roundedBar', options = {}) {
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
        barThickness: 20
      }]
    }

    Charts.create(id, type, options, data)
  }

  var Devices = function(id, type = 'doughnut', options = {}) {
    var data = {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [{
        data: [60, 25, 15],
        hoverBorderColor: settings.colors.white
      }]
    }

    Charts.create(id, type, options, data)
  }

  var TopicIQChart = function(id, type = 'radar', options = {}) {
    var data = {
      labels: ["JavaScript", "HTML", "Flinto", "Vue.js", "Sketch", "Priciple", "CSS", "Angular"],
      datasets: [{
        label: "Experience IQ",
        data: [30, 35, 33, 32, 31, 30, 28, 36],
        pointHoverBorderColor: settings.colors.accent[400],
        pointHoverBackgroundColor: settings.colors.white
      }]
    }

    Charts.create(id, type, options, data)
  }

  ///////////////////
  // Create Charts //
  ///////////////////

  Performance('#performanceChart')
  
  Performance('#performanceAreaChart', 'area')

  Orders('#ordersChart')

  Orders('#ordersChartSwitch')

  Devices('#devicesChart')

  TopicIQChart('#topicIqChart')

  $('[data-toggle="chart"]:checked').each(function (index, el) {
    Charts.add($(el))
  })

})()