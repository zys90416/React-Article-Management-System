import * as echarts from 'echarts'
import { useRef, useEffect } from "react"

function Bar(){
    const domRef = useRef()
    const chartInit = () =>{
        const myChart = echarts.init(domRef.current)
        myChart.setOption({
            title: {
              text: '三大框架满意度'
            },
            tooltip: {},
            xAxis: {
              data: ['react', 'vue', 'angular']
            },
            yAxis: {},
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [30, 40, 50]
              }
            ]
          })
    }
    useEffect (() => {
        chartInit()
    }, [])
    return (
        <div ref={domRef} style={{width: '500px', height: '400px'}}></div>
    )
}
export default Bar