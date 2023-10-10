const Input=({Inputstyle,changeHandler,value,inputclass})=>{
    return (
        <>
        <input type='text' value={value} style={Inputstyle} className={inputclass} onChange={changeHandler}/>
        </>
    )
}

export default Input;