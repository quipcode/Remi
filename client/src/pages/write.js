import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class write extends Component{
    constructor(){
        super()
        this.state = {
            editorContent: "nifty"
        }
        this.setValue = this.setValue.bind(this);
    }
  
    setValue(event){
        console.log(this.state.editorContent)
        this.state.editorContent = event      
    }
    render(){
        let value = this.state.value
        return(
            
            <ReactQuill theme="snow" value={this.state.editorContent} onChange={this.setValue}/>
        )
    }
}

export default write;