import React from "react"
import '../../App.css';
const TextDecoration = ({texto, textColor, bgColor})=>{
return <div className="container-text" style={{ textTransform:'uppercase', backgroundColor: bgColor}}>
    <p style={{color: textColor, }}>{texto}</p>
    </div>
}
TextDecoration.defaultProps = {
    textColor: "#fff" ,
    bgColor: "#000080" ,
    texto: "Esse daqui é um paragrafo contendo um texto padrão."
}
export default TextDecoration