import { Component } from "react"
import './styles.css'

export class Input extends Component{
    
    render(){
        const {searchValue,handleChange} = this.props;
        return(
<input className="input" type='search' onChange={handleChange} value={searchValue} placeholder="Busca"></input>)
}}