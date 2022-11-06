import React, { useState } from "react";
const QuickChart = require('quickchart-js');

const myChart = new QuickChart();
myChart.setConfig({
  type: 'bar',
  data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] },
});

console.log(myChart.getUrl());
const url = await myChart.getShortUrl();
console.log(url);