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
        <div>
            <form onSubmit={submit}>
                Server 
                <input 
                  type='number'
                  name='server'
                  placeholder='# of Servers'
                  onChange={handler}
                />
                Busser 
                <input 
                  type='number'
                  name='busboy'
                  placeholder='# of Bus Boys'
                  onChange={handler}
                />
                Bartender 
                <input 
                  type='number'
                  name='bartender'
                  placeholder='# of Bartenders'
                  onChange={handler}
                />
                Total Tip
                <input 
                  type='float'
                  name='tip'
                  placeholder='Tip'
                  onChange={handler}
                />
                {err && err}
                <button>Calculate</button>
            </form>
        </div>
    )
}

export default Form