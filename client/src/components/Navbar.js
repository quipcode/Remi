import React, {Component} from 'react'


class Navbar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <nav>
                <a href='/'>Home</a>
                <a href='/write'>Write</a>
            </nav>
        )
    }
}

export default Navbar