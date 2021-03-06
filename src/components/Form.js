import React, {useState} from 'react'

const Form = props => {
    const [obj, setObj] = useState({server: '', busboy: '', bartender: '', tip: ''})
    const [err, setErr] = useState()

    const handler = e => {
        setObj({
            ...obj,
            [e.target.name]: e.target.value
        })
    }
    //comment

    const submit = e => {
        e.preventDefault()
        if(
          obj.server.length    === 0 || 
          obj.busboy.length    === 0 || 
          obj.bartender.length === 0 || 
          obj.tip.length       === 0){
            setErr('Please fill out all the fields')
          } else {
            props.setState(obj)
            props.history.push('/result')
          }
        
    }

    return (
        <div className='form'>
            <form onSubmit={submit}>
                Server 
                <input 
                  type='number'
                  name='server'
                  placeholder='# of Servers'
                  onChange={handler}
                  required
                  min='0'
                />
                Busser 
                <input 
                  type='number'
                  name='busboy'
                  placeholder='# of Bus Boys'
                  onChange={handler}
                  required
                  min='0'
                />
                Bartender 
                <input 
                  type='number'
                  name='bartender'
                  placeholder='# of Bartenders'
                  onChange={handler}
                  required
                  min='0'
                />
                Total Tip
                <input 
                  type='number'
                  name='tip'
                  placeholder='Tip'
                  onChange={handler}
                  required
                  min='0'
                  step='0.01'
                />
                {err && err}
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Form