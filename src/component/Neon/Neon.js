import React, { Component } from "react";
import '../../style/Neon.scss';
class Neon extends Component {


    state = {
        click : 0,
	}


    render() {
        return (
            <div id='Neon' className={(this.props.mirror?'mirror':'origin')}>
             
            </div>      
        )
    }
}

export default Neon;