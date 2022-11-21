import React from "react";
import {Component} from "react";

export default  class Header extends Component {

    constructor(props){

        super(props)
        this.state = {

            on: "on",
            form: "none",
            value1: "",
            btnSend:"none",
            arr:[]

        }
        this.func = this.func.bind(this);
        this.func1 = this.func1.bind(this);
        this.send = this.send.bind(this);
        this.delete = this.delete.bind(this);
    }


    func = () => {
        if(this.state.form == "none"){
           this.state.form = "block"; 
           this.state.btnSend = "block";
           this.state.on = "off";
        }
        else{
            this.state.form = "none";
            this.state.on = "on";
            this.state.btnSend = "none";
        }
        this.setState({

            on:this.state.on
        })

    }

    func1 = (e) => {

        this.setState({

            value1:e.target.value

        })

    }

    send = () => {


        
        this.state.arr.push(this.state.value1);

        this.setState({

           arr:this.state.arr 

        })


    }

    delete = (index) => {


            this.state.arr.splice(index,1);


        this.setState({

            arr:this.state.arr

        })

    }

    render (){

        return(

            <div>

                    <div className = "Todo_List">
                        <div className="Todo_on">
                    <button  onClick ={this.func}>{this.state.on}</button>
                    </div>
                    <div className = "textarea_block">
                    <textarea style = {{display:this.state.form}} onInput = {this.func1}></textarea>
                    </div>
                    <div className = "block__send">
                    <button style ={{display: this.state.btnSend}} onClick={this.send}>send</button>
                    </div>
                    <div className = "Todo_liblock">
                    <ul>
                        {this.state.arr.map((items,index) => <li key = {index} onClick = {() => this.delete(index) }>{items}</li>)}
                    </ul>
                    </div>
                    </div>

            </div>

        )

    }

}