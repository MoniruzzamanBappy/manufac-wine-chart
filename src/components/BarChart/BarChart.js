import React, { useEffect, useState } from 'react';

import ReactEcharts from "echarts-for-react";

const BarChart = () => {
      const [data, setData] = useState([]);
      useEffect(() => {
          fetch('data.json')
              .then(res => res.json())
              .then(data => setData(data))
              .catch(err => console.log(err));
  
      }, []);
      var alc_ohol =[]
      for (var i = 0; i < data.length; i++) {
        alc_ohol.push(data[i].Alcohol)
      }
      var malic_Acid =[]
      for (var j = 0; j < data.length; j++) {
        malic_Acid.push(data[j].Malicacid)
      }
    const option = {
        tooltip: {
            trigger: 'axis'
          },
        xAxis: {
          type: 'category',
          data: alc_ohol
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: malic_Acid,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
    return (
        <ReactEcharts option={option} />
    );
};

export default BarChart;