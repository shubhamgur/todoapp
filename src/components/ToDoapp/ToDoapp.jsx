import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import {FaPlusCircle } from "react-icons/Fa";
import { useState } from "react";
import { useEffect } from "react";

const ToDoapp=()=>{

    const [text,setText]=useState('');
    const [list,setList]=useState([]);

    useEffect(()=>{
        const list1=JSON.parse(localStorage.getItem('todoappitem'));
        console.log(list1)
        setList(list1 || []);
    },[])


    useEffect(()=>{
        localStorage.setItem('todoappitem',JSON.stringify(list));
    },[list]);

    
const inputChange=(e)=>{
setText(e.target.value)
}

const addclickhandler=()=>{
    const itemobj={
        item:text,
        isDone:false,
        isEdit:false,
        editing:text
    }
    setList([...list,itemobj]);
    setText('');
}

const donebtnhandler=(ind)=>{
    const list1=[...list];
    list1[ind].isDone=true;
    setList(list1);
}

const deletebtnhandler=(ind)=>{
    const list1=[...list];
    list1.splice(ind,1);
    setList(list1);
}

const swappinghandler=(ind,ind2)=>{
    const list1=[...list];
    let temp=list1[ind];
    list1[ind]=list1[ind2];
    list1[ind2]=temp;
    setList(list1);
}

const editebtnhandler=(ind)=>{
    const list1=[...list];
    list1[ind].isEdit=true;
    setList(list1);
}

const canclehandler=(ind)=>{
    const list1=[...list];
    list1[ind].editing=list1[ind].item
    list1[ind].isEdit=false;
    setList(list1);
}

const itemchange=(ind,newvalue)=>{
    const list1=[...list];
    list1[ind].editing=newvalue;
    setList(list1);
}

const savebtnhandler=(ind)=>{
    const list1=[...list];
    list1[ind].item=list1[ind].editing
    list1[ind].isEdit=false;
    setList(list1);
}

    return(
        <>
        <div style={{backgroundColor:'blanchedalmond',paddingBottom:'30px'}}>
        <h1 style={{fontStyle:'italic',fontSize:'50px'}}>To Do List</h1>
        <Input changeHandler={inputChange} value={text} Inputstyle={{width:'500px',height:'30px', fontSize:'22px',borderRadius:'7px'}}/>
        <span style={{marginLeft:'30px'}}>
        <Button  isdisable={!text.trim()} clickhandler={addclickhandler} btnStyle={{height:'35px',width:'50px' ,border:'none',color:'red',backgroundColor:'MediumSeaGreen'}} btnText={<FaPlusCircle/>}/><br></br><br></br>
        </span>
        <List list={list}
        donebtnhandler={donebtnhandler}
        deletebtnhandler={deletebtnhandler}
        swappinghandler={swappinghandler}
        editebtnhandler={editebtnhandler}
        canclehandler={canclehandler}
        itemchange={itemchange}
        savebtnhandler={savebtnhandler}/>
        </div>
        </>
    )
}

export default ToDoapp;