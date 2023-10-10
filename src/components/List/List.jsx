import Button from '../Button/Button';
import style from './List.module.css';
import Input from '../Input/Input'
import { FiArrowUp,FiCheckSquare,FiArrowDown,FiTrash2 ,FiEdit,FiBookmark,FiX} from "react-icons/fi";

const List=({list,donebtnhandler,deletebtnhandler,swappinghandler,editebtnhandler,canclehandler,itemchange,savebtnhandler})=>{

const listItem=list.map((ele,ind)=>
<li key={ind} className={ ele.isDone ?  style.donelist:style.listitem} >
    {!ele.isEdit && (
        <>
        {ele.item}
        <Button btnText={<FiEdit/>}  clickhandler={()=>{editebtnhandler(ind)}} btnclass={style.allbtn}  btnStyle={{backgroundColor:'khaki',color:'black', position: 'fixed',right:'480px'}}/>
        </>
    )}

    {ele.isEdit && (
        <>
        <Input value={ele.editing} inputclass={style.inputstyle} changeHandler={(e)=>{itemchange(ind,e.target.value)}}/>
        <Button btnText={<FiBookmark/>} clickhandler={()=>{savebtnhandler(ind)}} btnclass={style.allbtn} btnStyle={{backgroundColor:'orchid',color:'white', position: 'fixed',right:'530px'}}/>
        <Button btnText={<FiX/>}  clickhandler={()=>{canclehandler(ind)}} btnclass={style.allbtn} btnStyle={{backgroundColor:'Tomato',color:'white', position: 'fixed',right:'480px'}}/>
        </>
    )}

    <Button  btnStyle={{backgroundColor:'DodgerBlue',color:'white', position: 'fixed',right:'420px'}} btnclass={style.allbtn} isdisable={!ind} clickhandler={()=>{swappinghandler(ind,ind-1)}} btnText={<FiArrowUp/>}/>
    <Button  btnStyle={{backgroundColor:'DodgerBlue',color:'white', position: 'fixed',right:'360px'}} btnclass={style.allbtn} isdisable={list.length-1===ind} btnText={<FiArrowDown/>} clickhandler={()=>{swappinghandler(ind,ind+1)}}/>
    {!ele.isDone && (
        <Button btnStyle={{backgroundColor:'green',color:'white', position: 'fixed',right:'300px'}} clickhandler={()=>{donebtnhandler(ind)}} btnclass={style.allbtn} btnText={<FiCheckSquare/>}/>
    )}
    {ele.isDone && (
 <Button btnclass={style.allbtn} clickhandler={()=>{deletebtnhandler(ind)}} btnStyle={{backgroundColor:'red',color:'white', position: 'fixed',right:'300px'}}   btnText={<FiTrash2/>}/>
    )}
    </li>)

    return(
        
        <ul type='none' style={{display:'inline-block'}}>
            {listItem}
        </ul>
        
    )
}

export default List;