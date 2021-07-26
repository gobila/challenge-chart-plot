import React, { useEffect, useState } from 'react';
import Highlight from 'react-highlight'
import './index.css';
import '../../utils/Style-Highlightjs.css'

function High(prop){
    return(
        <Highlight className='JSON'>
            {prop.data}
        </Highlight>
    )
}

export default function InputData(){
    const defaultInput = `{type: "start", timestamp: 1519862400000, select: ["min_response_time","max_response_time"], group: ["os","browser"]},
{type: "span", timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000},
{type: "data", timestamp: 1519862400000, os: "linux", browser: "chrome", min_response_time: 0.1, max_response_time: 1.3},
{type: "data", timestamp: 1519862400000, os: "mac", browser: "chrome", min_response_time: 0.2, max_response_time: 1.2},
{type: "data", timestamp: 1519862400000, os: "mac", browser: "firefox", min_response_time: 0.3, max_response_time: 1.2},
{type: "data", timestamp: 1519862400000, os: "linux", browser: "firefox", min_response_time: 0.1, max_response_time: 1.0},
{type: "data", timestamp: 1519862460000, os: "linux", browser: "chrome", min_response_time: 0.2, max_response_time: 0.9},
{type: "data", timestamp: 1519862460000, os: "mac", browser: "chrome", min_response_time: 0.1, max_response_time: 1.1},
{type: "stop", timestamp: 1519862460000}
`

 const [inputData, setInputData] = useState('')

    
    useEffect(()=>{
        if(inputData.length===0){
            return setInputData(defaultInput)
        }
    },[]);

    function muda(event){
        return <High data={inputData}/>
    }
    return(
        <div className='inputArea'>
            <code contentEditable={true} style={{
                maxHeight:"300px"
            }}>
                <High data={inputData}></High>
            </code>

                
        </div>
    )
}