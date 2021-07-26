import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
//data default in JSON
import {datas}from "../defaultData/DataDefault";
//Styles
import './index.css'


export default function LineChart() {

    const [data, setData]= useState()
    // filter Data Array for Type equals span
    const span = datas.filter(i=> i.type==="span").map((i)=>{
        return({
            begin:i.begin,
            end:i.end,
        })
    })

    //separate groups by Os and Browser
const groups = datas.filter(f=> f.os!==undefined).map((i)=>{
    let os=i.os;
    let browser=i.browser;
    let min= i.min_response_time;
    let max=i.max_response_time;

    return{
        name: os+browser,
        // browser: browser,
        min_response_time: min,
        max_response_time:max,
        timestamp:i.timestamp
    }
})

  function group(list,key){
     return list.reduce((objectsByKeyValue, obj)=>{
         (objectsByKeyValue[obj[key]]=objectsByKeyValue[obj[key]]||[]).push(obj);
         
         return objectsByKeyValue

     },{});
 }
//All grups by DefaultDate => change to timestamp
  let groupOS=group(groups,"name");

  // linuxchromeMax
  let linuxchromeMax = [{
    max1:groupOS.linuxchrome[0].max_response_time,
    max2:groupOS.linuxchrome[1].max_response_time
  }];
  let linuxchromeMin = [{
      min1:groupOS.linuxchrome[0].min_response_time,
      min2:groupOS.linuxchrome[1].min_response_time
  }]
  let linuxchrome=[{
    name: groupOS.linuxchrome[0].name,
    max:linuxchromeMax[0],
    min:linuxchromeMin[0]
  }]
  // macchromeMax
  let macchromeMax= [{
    max1:groupOS.macchrome[0].max_response_time,
    max2:groupOS.macchrome[1].max_response_time
  }];
  let macchromeMin= [{
    min1:groupOS.macchrome[0].min_response_time,
    min2:groupOS.macchrome[1].min_response_time
  }];
  let macchrome= [{
    name: groupOS.macchrome[0].name,
    max:macchromeMax[0],
    min:macchromeMin[0]
  }]
  // linuxfirefox
  let linuxfirefoxMax= [{
    max1:groupOS.linuxfirefox[0].max_response_time,
    max2:groupOS.linuxfirefox[0].max_response_time
  }];
  let linuxfirefoxMin= [{
    min1:groupOS.linuxfirefox[0].min_response_time,
    min2:groupOS.linuxfirefox[0].min_response_time
  }];
  let linuxfirefox= [{
    name: groupOS.linuxfirefox[0].name,
    min:linuxfirefoxMin[0],
    max:linuxfirefoxMax[0]
  }]
  // macfirefox
  let macfirefoxMax= [{
    max1:groupOS.macfirefox[0].max_response_time,
    max2:groupOS.macfirefox[0].max_response_time
  }];
  let macfirefoxMin= [{
    min1:groupOS.macfirefox[0].min_response_time,
    min2:groupOS.macfirefox[0].min_response_time
  }];
  let macfirefox= [{
    name: groupOS.macfirefox[0].name,
    max:macfirefoxMax[0],
    min:macfirefoxMin[0]
  }]

  const Array = [...macchrome,...linuxchrome,...linuxfirefox,...macfirefox]

  // rafactoring groups to timestamp
  const groupBytime=group(groups,'timestamp')
  const begin=JSON.stringify('.'+span[0].begin)

  const a = [groupBytime]
  const b = [...a]
  const c = b[0]+begin
  console.log(c)

    useEffect(()=>{
        // Set datas with Max
     const max = Array.map((i)=>{
          return(
              {
                id: i.name+" max",
                data: [
                  {
                    x: "0",
                    y: i.max.max1
                  },
                  {
                    x: "1",
                    y: i.max.max2
                  }
                ]
              }
          )
     })  
      // Set datas with Min
     const min = Array.map((i)=>{
      return(
          {
            id: i.name+" min",
            data: [
              {
                x: "0",
                y: i.min.min1
              },
              {
                x: "1",
                y: i.min.min2
              }
            ]
          }
      )
    })  
    //population dataset
     setData([...max, ...min])
    },[])
    
  return (
    <div className="chart">
      <ResponsiveLine
        data={data}//Datasets
        margin={{ top: 50, right: 150, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false
        }}
        //Configs Nivo
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
        }}
        gridYValues={[]}
        axisLeft={{
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={9}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
      
    </div>
  );
}
