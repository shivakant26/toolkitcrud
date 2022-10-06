import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

    name:"crudop",
    initialState:{
        data:[],
        edit_data:[],
        error:[],
        status:"idle"
    },

    reducers:{
        addData(state , action){
            let arr = state.data;
            arr.push(action.payload)
            localStorage.setItem("item",JSON.stringify(arr))
        },
        delData(state,action){
            let arr = state.data;
            arr.splice(action.payload,1);
            localStorage.setItem("item",JSON.stringify(arr))
        },
        editData(state,action){
            let dat = JSON.parse(localStorage.getItem('item'))
            let current_obj = dat[action.payload];
            let id = action.payload;
            state.edit_data  = {current_obj,id}
        },
        updateData(state,action){
            let dat = JSON.parse(localStorage.getItem('item'))
            dat.splice(action.payload.id,1,action.payload.obj);
            state.data = [...dat,dat];
            localStorage.setItem("item",JSON.stringify(dat))
        }
    },
    extraReducers:{

    }
});

//for action
export const { addData , delData , editData ,updateData} = userSlice.actions;
export default userSlice.reducer;