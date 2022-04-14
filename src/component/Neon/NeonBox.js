import React, { Component } from "react";
import Neon from './Neon';
import Mirror from './Mirror';
import Gradient from './Gradient';
class Neonbox extends Component {


    render() {
        const name = "react";
        return (
            
            <div id="NeonBox">
                <Mirror/>
                <Neon/>
                <Neon mirror={true}/>

                <Gradient/>
            </div>
            
        )
    }
}

export default Neonbox;