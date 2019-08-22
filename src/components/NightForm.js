import React, {useState} from 'react'


const NightForm = props => {
    const [bool, setBool] = useState({server: false, busser: false, bartender: false})
    const [obj, setObj] = useState({name: '', time: ''})
    
    const [arr, setArr] = useState({serverArr: [], busserArr: [], barArr: []})

    const [total, setTotal] = useState({tip: '', hours: ''})

    const handler = e => {
        setObj({
            ...obj,
            [e.target.name]:e.target.value
        })
    }

    const totalHandler = e => {
        setTotal({
            ...total,
            [e.target.name]: e.target.value
        })
    }

    const cancel = e => {
        e.preventDefault()
        setObj({name: '', time: ''})
        setBool({server: false, busser: false, bartender: false})
    }

    const add = e => {
        e.preventDefault()
        if(obj.name.length > 0 && obj.time.length > 0) {
            setBool({server: false, busser: false, bartender: false})
            setArr({
                ...arr,
                [e.target.name]: [...arr[e.target.name], obj]
            })
            setObj({name: '', time: ''})
        }
        
    }

    const calculate = e => {
        e.preventDefault()
        if(total.tip.length > 0 && total.hours.length > 0) {
            props.setNightState({bool: bool, obj: obj, arr: arr, total: total})
            props.history.push('/nightform/result')
        }
        
    }

    return (
        <div className='form'>
            
                <form className='flex' onSubmit={calculate}>
                    <div className='column'>
                        <strong className='st'>Total Tips $</strong>
                        <input 
                          onChange={totalHandler}
                          name='tip'
                          type='number'
                          placeholder='Total Tips'
                        />
                    </div>
                    <div className='column'>
                        <strong className='st'>Total Hours</strong>
                        <input 
                          onChange={totalHandler}
                          name='hours'
                          type='number'
                          placeholder='Total Hours'
                        />
                    </div>
                    <div className='column'>
                        <strong>Server</strong>
                        {arr.serverArr.map(each => (
                            <div className='picks'>
                                <p><strong>Name:</strong> {each.name}</p>
                                <p><strong>Time:</strong> {each.time}</p>
                            </div>
                        ))}
                        <div className={!bool.server ? 'none' : 'flex'}>
                            <input 
                              placeholder='Name'
                              name='name'
                              onChange={handler}
                              type='string'
                              value={obj.name}
                            />
                            <input 
                              placeholder='Time'
                              name='time'
                              onChange={handler}
                              type='number'
                              value={obj.time}
                            />
                            
                        </div>
                        <button onClick={(e) => setBool({...bool, server: !bool.server}, e.preventDefault())} className={!bool.server ? 'wide' : 'none'}>Add</button>
                        <div className='flex'>
                            <button onClick={add} name='serverArr' className={!bool.server ? 'none' : 'wide'}>save</button>
                            <button onClick={cancel} className={!bool.server ? 'none' : 'wide' }>cancel</button>
                        </div>
                        
                    </div>
                    <div className='column'>
                        <strong className='border'>Busser</strong>
                        {arr.busserArr.map(each => (
                            <div className='picks'>
                                <p><strong>Name:</strong> {each.name}</p>
                                <p><strong>Time:</strong> {each.time}</p>
                            </div>
                        ))}
                        <div className={!bool.busser ? 'none' : 'flex'}>
                            <input 
                              placeholder='Name'
                              name='name'
                              onChange={handler}
                              type='text'
                              value={obj.name}
                            />
                            <input 
                              placeholder='Time'
                              name='time'
                              onChange={handler}
                              type='number'
                              value={obj.time}
                            />
                            
                        </div>
                        <button onClick={(e) => setBool({...bool, busser: !bool.busser}, e.preventDefault())} className={!bool.busser ? 'wide' : 'none'}>Add</button>
                        <div className='flex'>
                            <button onClick={add} name='busserArr' className={!bool.busser ? 'none' : 'wide' }>save</button>
                            <button onClick={cancel} className={!bool.busser ? 'none' : 'wide' }>cancel</button>
                        </div>
                        
                    </div>
                    <div className='column'>
                    <strong className='border'>Bartender</strong>
                        {arr.barArr.map(each => (
                            <div className='picks'>
                                <p><strong>Name:</strong> {each.name}</p>
                                <p><strong>Time:</strong> {each.time}</p>
                            </div>
                        ))}
                        <div className={!bool.bartender ? 'none' : 'flex'}>
                            <input 
                              placeholder='Name'
                              name='name'
                              onChange={handler}
                              type='text'
                              value={obj.name}
                            />
                            <input 
                              placeholder='Time'
                              name='time'
                              onChange={handler}
                              type='number'
                              value={obj.time}
                            />
                            
                        </div>
                        <button onClick={(e) => setBool({...bool, bartender: !bool.bartender}, e.preventDefault())} className={!bool.bartender ? 'wide' : 'none'}>Add</button>
                        <div className='flex'>
                            <button onClick={add} name='barArr' className={!bool.bartender ? 'none' : 'wide'}>save</button>
                            <button onClick={cancel} className={!bool.bartender ? 'none' : 'wide' }>cancel</button>
                        </div>
                        
                    </div>
                    <button>Calculate</button>
                </form>
                
            
        </div>
    )
}

export default NightForm