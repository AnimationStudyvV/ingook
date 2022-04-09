import React, { Component } from "react";
import '../style/BottomBar.scss';
class BottomBar extends Component {


    state = {
        click : 0,
	}

    list = (text,num,icon='') => {
        return(
            <li>
            <button className={(this.state.click==num?'select':'unselect')} onClick={()=>this.setState({click : num})}>
                <div className="ButtonInfo">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_314955.png"/>
                    <span>
                    {text}
                    </span>
                </div>
            </button>
            </li>
        )
    }


    render() {
        return (
            <div id='BottomBar'>
                <div id="safezoon">
                    <div id='BarCircle' className={'select'+this.state.click}>
                        <div id="Circle">
                            <div id="InnerCircle">

                            </div>
                        </div>
                    </div>
                    <div id='BarButtons'>

                    </div>

                <div id='BarButtons'>
                <ul>
                    {this.list('Home',0)}
                    {this.list('Home',1)}
                    {this.list('Home',2)}
                    {this.list('Home',3)}
                    {this.list('Home',4)}
                </ul>
                </div>
                </div>

            </div>            
        )
    }
}

export default BottomBar;