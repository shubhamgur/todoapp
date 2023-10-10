

const Button=({btnText,btnStyle,clickhandler,btnclass,isdisable})=>{
return(
    <>
    <button style={btnStyle} onClick={clickhandler} className={btnclass} disabled={isdisable}>{btnText}</button>
    </>
)
}

export default Button;