import React,{useState, useEffect} from 'react'

const NightResult = props => {
    // if(!props.nightState){
    //     return (
    //         <div>
    //             <h1>Please fill out the form!</h1>
    //         </div>
    //     )
    // } 
    // console.group(props.nightState)
    // let hour = props.nightState.total.tip / props.nightState.total.hours
    // const busser = props.nightState.arr.busserArr.length === 0 ? 0 : (Number(hour) / 100 * 15)
    // const bar = props.nightState.arr.barArr.length === 0 ? 0 : (Number(hour) / 100 * 5) / props.nightState.arr.barArr.length
    // const server = props.nightState.arr.serverArr.length === 0 ? 0 : ((Number(hour) - ((Number(hour) / 100 * 15) + (Number(hour) / 100 * 5))) / props.nightState.arr.serverArr.length)
    
    const arrBus = props.nightState.arr.busserArr
  const [resultBus, setresultBus] = useState([0]);
  const [hoursBus, sethoursBus] = useState(arrBus.map(each => Number(each.time)).sort((a,b) => a-b));
  const [valueBus, setvalueBus] = useState(0);
  const [valBus, setValBus] = useState([]);
  let objBus = []

  const moneyBus = props.nightState.total.tip / 100 * 15;
  const dayhrBus = props.nightState.total.hours;

  let minBus = Math.min(...hoursBus);
  
  let resBus = Math.max(...resultBus);

  useEffect(() => {
    if (hoursBus.includes(minBus)) {
      sethoursBus(hoursBus.filter(each => each !== minBus).map(item => item - minBus));
      if (hoursBus.length !== 0) {
        let calc = ((moneyBus / dayhrBus) * minBus) / hoursBus.length + resBus;
        setvalueBus(valueBus + minBus);
        setValBus([...valBus, { hour: valueBus + minBus, money: calc }]);
        setresultBus([...resultBus, calc]);
      }
    }
  }, [hoursBus]);


  
  for (let i = 0; i < arrBus.length; i++) {
      for( let j = 0; j < valBus.length; j++) {
          if(Number(arrBus[i].time) === valBus[j].hour)
          objBus.push({name: arrBus[i].name, money: valBus[j].money})
    }
  }

  const busReduce = objBus.length === 0 ? 0 : objBus.reduce((reduce, each) => reduce += each.money, 0)


//  let arrr = [{nums: 4}, {nums: 6}]

//  arrr.reduce((each, reduce) => console.log(each, reduce, 'grewrgr'), 0)














  const arrBar = props.nightState.arr.barArr
  const [resultBar, setresultBar] = useState([0]);
  const [hourBar, sethourBar] = useState(arrBar.map(each => Number(each.time)).sort((a,b) => a-b));
  const [valueBar, setvalueBar] = useState(0);
  const [valBar, setValBar] = useState([]);
  let objBar = []

  const moneyBar = props.nightState.total.tip / 100 * 5;
  const dayhrBar = props.nightState.total.hours;

  let minBar = Math.min(...hourBar);
  let resBar = Math.max(...resultBar);

  useEffect(() => {
    if (hourBar.includes(minBar)) {
      sethourBar(hourBar.filter(each => each !== minBar).map(item => item - minBar));
      if (hourBar.length !== 0) {
        let calc = ((moneyBar / dayhrBar) * minBar) / hourBar.length + resBar;
        setvalueBar(valueBar + minBar);
        setValBar([...valBar, { hour: valueBar + minBar, money: calc }]);
        setresultBar([...resultBar, calc]);
      }
    }
    // console.log(resultBar)
  }, [hourBar]);


  
  for (let i = 0; i < arrBar.length; i++) {
      for( let j = 0; j < valBar.length; j++) {
          if(Number(arrBar[i].time) === valBar[j].hour)
          objBar.push({name: arrBar[i].name, money: valBar[j].money})
      }
  }

  
  const serverReduce = objBar.length === 0 ? 0 : objBar.reduce((reduce, each) => reduce += each.money, 0)
    
    
    













    const arrServ = props.nightState.arr.serverArr
  const [resultServ, setresultServ] = useState([0]);
  const [hourServ, sethourServ] = useState(arrServ.map(each => Number(each.time)).sort((a,b) => a-b));
  const [valueServ, setvalueServ] = useState(0);
  const [valServ, setValServ] = useState([]);
  let objServ = []

  const moneyServ = props.nightState.total.tip - (moneyBus + moneyBar);
  const dayhrServ = props.nightState.total.hours;

  let minServ = Math.min(...hourServ);
  let resServ = Math.max(...resultServ);

  useEffect(() => {
    if (hourServ.includes(minServ)) {
      sethourServ(hourServ.filter(each => each !== minServ).map(item => item - minServ));
      if (hourServ.length !== 0) {
        let calc = ((moneyServ / dayhrServ) * minServ) / hourServ.length + resServ;
        setvalueServ(valueServ + minServ);
        setValServ([...valServ, { hour: valueServ + minServ, money: calc }]);
        setresultServ([...resultServ, calc]);
      }
    }
    // console.log(resultServ)
  }, [hourServ]);


  
  for (let i = 0; i < arrServ.length; i++) {
      for( let j = 0; j < valServ.length; j++) {
          if(Number(arrServ[i].time) === valServ[j].hour)
          objServ.push({name: arrServ[i].name, money: valServ[j].money})
      }
  }

  
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    // console.log(server)
    // const totalWorkers = props.nightState.arr.busserArr.length + props.nightState.arr.barArr.length +  props.nightState.arr.serverArr.length
    // console.log(totalWorkers)
    // let sort = props.nightState.arr.busserArr.sort((a, b) => a.time - b.time)
    // let bus = sort.map(each => Number(each.time))


    // let busSort = []
    // let minServ = Math.min(...bus)
    // let count = props.nightState.arr.busserArr.filter(each => each.time == min)
    // let record = 0

    
    // function recursion() {
    //     console.log(props.nightState.arr.busserArr.length)
    //     // console.log('hour', hour)
    //     props.nightState.arr.busserArr.map((each, index) => {
    //         if(each.time == min && bus.length > 0) {
    //             // console.log('length',bus.length)
    //             console.log('record', record, 'count', count)
    //             // console.log('min', min)
    //             let moneyServ = hour / props.nightState.arr.busserArr.length * min + record
    //             // console.log('money', money)
    //             busSort.push({name: each.name, made: money})
    //             bus.shift()
    //             props.nightState.arr.busserArr.shift()
    //             // props.nightState.arr.busserArr.shift()
    //             min = Math.min(...bus)
    //             console.log(index, bus.length)
    //             count = props.nightState.arr.busserArr.filter(each => each.time == min)
    //             if(index === props.nightState.arr.busserArr.length - 1) {
                    
    //                 record = money
    //                 hour = props.nightState.total.tip / hour - each.time
    //                 console.log('helloooooooooooooooooooooooooooooo')
    //                 console.log('hoooooooooooo', hour)
    //                 // bus = bus.filter(num => num != min)
                    
    //             }
                
    //         }
            
    //     })
        
    //     if(props.nightState.arr.busserArr.length > 0) {
    //         recursion()
    //     }
    // }   

    // recursion()

    // let x = 10
    
    // function rec() {
    //     x--
    //     console.log(x)
    //     if(x > 0) {
    //          rec()
    //     }
        
    // }

    // rec()
    
    
        
    
    
    // console.log('record', record, 'count', count.length)

    // for (let i = 0; i < props.nightState.arr.busserArr.length; i++) {
    //     bus.push(Number(props.nightState.arr.busserArr[i].time))   
    // }
    // let min = Math.min(...bus)
    // let indTotal = 0

    // let fil = bus.filter(e => e != min);
    // console.log('filter',fil)


    // // for(let b = 0; b < bus.length; b++) {
    // //     if(Number(bus[b]) === Number(min)) {
    // //         const time = hour / props.nightState.arr.busserArr.length * bus[b] + indTotal
    // //         busSort.push(time)
    // //         bus.splice(b, 1)
    // //         b = 0
    // //     }
    // // }


    // console.log('bus',bus)
    // console.log('busSort',busSort)
    // console.log('min',Math.min(...bus))

    // for( let j = 0; j < bus.length; j++) {
        //     if(Number(bus[j]) < Number(props.nightState.arr.busserArr[i].time)) {
        //         busSort.push(bus[j])
        //     }
        // }

    // console.log('bus sort',busSort)


    // for(let k = 0; k < props.nightState.arr.serverArr.length; i++) {
    //     console.log(props.nightState.arr.serverArr[k])
    // }

    
    return (
        <div>
            <h1>Bussers</h1>
            {objBus.map(each => <h3><strong className='red'>{each.name}</strong> made: ${each.money}</h3>)}
            <h1>Bartenders</h1>
            {objBar.map(each => <h3><strong className='red'>{each.name}</strong> made: ${each.money}</h3>)}
            <h1>Servers</h1>
            {objServ.map(each => <h3><strong className='red'>{each.name}</strong> made: ${each.money}</h3>)}
            {/* Bussers
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
            </div>))} */}
            
        </div>
    )
}

export default NightResult