import React from 'react'
import { Link } from 'react-router-dom'


const Result = props => {
    console.log(props.state)
    if(props.state){
        const total = Number(props.state.tip)
        const bartender = Number(props.state.bartender)
        const busser = Number(props.state.busboy)
        const server = Number(props.state.server)
        console.log(server, busser, bartender, total)

        const bartenderTotal = (total / 100) * 5 / bartender
        const busserTotal = (total / 100) * 15 / busser
        const serverTotal = ((total - (bartenderTotal * bartender + busserTotal * busser)) / server)
        
        return (
            <div>
                { props.state && <h3>Each Bartender Gets: ${bartenderTotal.toFixed(2)}</h3>}
                { props.state && <h3>Each Busser Gets: ${busserTotal.toFixed(2)}</h3>}
                { props.state && <h3>Each Server Gets: ${serverTotal.toFixed(2)}</h3>}
                <Link to='/'><button>Back</button></Link>
            </div>
        )
    }
    return (
        <div>
            Please Enter the Numbers
        </div>
    )
    
    
    
}

export default Result