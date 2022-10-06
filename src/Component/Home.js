import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, delData, editData, updateData } from "../Redux/userSlice";

export const Home = () =>{
    const [ hobby , setHobby ] = useState("");
   
    const dispatch = useDispatch();
    const data = useSelector((state)=>state?.user?.data);
    const edit_Record = useSelector((state)=>state?.user);
    const id = edit_Record?.edit_data?.id
    console.log(123,edit_Record);
    
    const add = () =>{
        let obj = {hobby};
        if(id){
        dispatch(updateData({obj,id}))
        }else{
        dispatch(addData(obj))
        }
        setHobby("");
    }
    const del = (id) =>{
        dispatch(delData(id))
    }
    const edit = (id) =>{
        dispatch(editData(id))
    }


    useEffect(()=>{
        if(id){
            let edithobby = edit_Record?.edit_data?.current_obj?.hobby;
            setHobby(edithobby);
        }
    },[edit_Record , data])

    
    return(
        <>
            <h2>Home Component</h2>
            <input type="text" 
            placeholder="Hobby"
            value={hobby ? hobby : ""}
            onChange={(e)=>setHobby(e.target.value)}
            />
            <button onClick={add}>{id ? "Update Hobby" : "Add Hobby"}</button>
            <div className="table">
                <ul>
                    {
                        data.length > 0 ? <>{data.map((item,id)=>{
                                return(
                                    <li key={id}>{item.hobby} 
                                    <button onClick={()=>edit(id)}>Edit</button>
                                    <button onClick={()=>del(id)}>Delete</button>
                                    </li>
                                )
                        })}</> : "No Record Here"
                    }
                </ul>
            </div>
        </>
    )
}