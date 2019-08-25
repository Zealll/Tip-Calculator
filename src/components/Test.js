import React, {useState, useEffect} from 'react'
import { id } from 'postcss-selector-parser';

const Test = () => {

  const arr = [{name: 'Sare', hours: 5}, {name: 'Hara', hours: 5}, {name: 'Tony', hours: 7}, {name: 'Aretti', hours: 10}, {name: 'Elan', hours: 5}]
  const [result, setResult] = useState([0]);
  const [hours, setHours] = useState(arr.map(each => each.hours).sort((a,b) => a-b));
  const [value, setValue] = useState(0);
  const [val, setVal] = useState([]);
//   const [obj, setObj] = useState([])
  let obj = []

  const money = 80;
  const dayhr = 10;

  let min = Math.min(...hours);
  let res = Math.max(...result);

  useEffect(() => {
    if (hours.includes(min)) {
      setHours(hours.filter(each => each !== min).map(item => item - min));
      if (hours.length !== 0) {
        let calc = ((money / dayhr) * min) / hours.length + res;
        setValue(value + min);
        setVal([...val, { hour: value + min, money: calc }]);
        setResult([...result, calc]);
      }
    }
    // console.log(result)
  }, [hours]);


  for (let i = 0; i < arr.length; i++) {
      
      for( let j = 0; j < val.length; j++) {
          if(arr[i].hours === val[j].hour)
          obj.push({name: arr[i].name, money: val[j].money})
          console.log(obj)
        //   console.log(hours[i], val[j])
        
      }
  }
    
    


















//   const [result, setResult] = useState([0]);
//   const [hours, setHours] = useState([5, 5, 5, 7, 10]);
//   const [value, setValue] = useState(0);
//   const [val, setVal] = useState([]);
// //   const [obj, setObj] = useState([])
//   let obj = []

//   let sameVal = [5, 5, 5, 7, 10]

//   const money = 80;
//   const dayhr = 10;

//   let min = Math.min(...hours);
//   let res = Math.max(...result);

//   useEffect(() => {
//     if (hours.includes(min)) {
//       setHours(hours.filter(each => each !== min).map(item => item - min));
//       if (hours.length !== 0) {
//         let calc = ((money / dayhr) * min) / hours.length + res;
//         setValue(value + min);
//         setVal([...val, { hour: value + min, money: calc }]);
//         setResult([...result, calc]);
//       }
//     }
//     // console.log(result)
//   }, [hours]);


//   for (let i = 0; i < sameVal.length; i++) {
      
//       for( let j = 0; j < val.length; j++) {
//           if(sameVal[i] === val[j].hour)
//           obj.push({name: 'a', money: val[j].money})
//           console.log(obj)
//         //   console.log(hours[i], val[j])
        
//       }
//   }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const[time, setTime] = useState([5,7,5,8,10].sort((a,b) => a - b))
    // const [bool, setBool] = useState(false)
//     const totalTip = 100
//     const shift = 10

    

//     const perHour = 100 / 10
    

//    let time = [5,7,5,8,10].sort((a,b) => a - b)
//    let bool = false

//    let min = Math.min(...time)

    // useEffect(() => {
    //     // time.map((each,index) => {
    //     //     if(each === min) {
    //     //         time.shift()
    //     //         setTime(time)
    //     //         setBool(!bool)
    //     //         console.log(time)
    //     //         console.log('index', index)
    //     //     }
            
    //     //     console.log(min)
    //     // })
    //     const filter = time.filter(each => each === min)
    //     console.log('length',filter.length)
    //     console.log('filter', filter)
    //     for (let i = 0; i < time.length; i++) {
    //         if(time[i] === min) {
    //             time.shift()
    //             bool = !bool
    //             console.log(time)
    //         }
    //     }
    // }, [bool])
    

    // console.log(time)



    return (
        <div>

        </div>
    )
}

export default Test