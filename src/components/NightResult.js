import React from 'react'

const NightResult = props => {
    if(!props.nightState){
        return (
            <div>
                <h1>Please fill out the form!</h1>
            </div>
        )
    } 
    console.group(props.nightState)
    const hour = props.nightState.total.tip / props.nightState.total.hours
    const busser = props.nightState.arr.busserArr.length === 0 ? 0 : (Number(hour) / 100 * 15) / props.nightState.arr.busserArr.length
    const bar = props.nightState.arr.barArr.length === 0 ? 0 : (Number(hour) / 100 * 5) / props.nightState.arr.barArr.length
    const server = props.nightState.arr.serverArr.length === 0 ? 0 : ((Number(hour) - ((Number(hour) / 100 * 15) + (Number(hour) / 100 * 5))) / props.nightState.arr.serverArr.length)
    console.log(server)
    
    return (
        <div>
            Bussers
            {busser === 0 ? null : props.nightState.arr.busserArr.map(each => (
            <div>
                <h2>{each.name} made ${each.time * busser}</h2>
            </div>))}
            Bartenders
            {bar === 0 ? null : props.nightState.arr.barArr.map(each => (
            <div>
                <h2>{each.name} made ${each.time * bar}</h2>
                
            </div>))}
            Servers
            {server === 0 ? null : props.nightState.arr.serverArr.map(each => (
            <div>
                <h2>{each.name} made ${each.time * server}</h2>
            </div>))}
        </div>
    )
}

export default NightResult