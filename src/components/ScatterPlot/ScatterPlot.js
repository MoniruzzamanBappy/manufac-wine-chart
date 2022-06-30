import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react";

const scatterPlot = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));

    }, []);
    var colorIntensity =[]
    for (var i = 0; i < data.length; i++) {
        colorIntensity.push(data[i].Color_intensity)
    }
    var hue =[]
    for (var j = 0; j < data.length; j++) {
        hue.push(data[j].Hue)
    }
    const option = {
      tooltip: {
        trigger: 'axis'
      },
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [colorIntensity[0], hue[0]],
                [colorIntensity[1], hue[1]],
                [colorIntensity[2], hue[2]],
                [colorIntensity[3], hue[3]],
                [colorIntensity[4], hue[4]],
                [colorIntensity[5], hue[5]],
                [colorIntensity[6], hue[6]],
                [colorIntensity[7], hue[7]],
                [colorIntensity[8], hue[8]],
                [colorIntensity[9], hue[9]],
                [colorIntensity[10], hue[10]],
                [colorIntensity[11], hue[11]],
                [colorIntensity[12], hue[12]],
                [colorIntensity[13], hue[13]],
                [colorIntensity[14], hue[14]],
                [colorIntensity[15], hue[15]],
                [colorIntensity[16], hue[16]],
                [colorIntensity[17], hue[17]],
                [colorIntensity[18], hue[18]],
                [colorIntensity[19], hue[19]],
                [colorIntensity[20], hue[20]],
                [colorIntensity[21], hue[21]]
            ],
            type: 'scatter'
          }
        ]
      };
    return (
       <ReactEcharts option={option} />
    );
};

export default scatterPlot;