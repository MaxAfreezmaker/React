import { useContext, useState } from "react"
import AppContext from "../data/AppContext";



function CreateForm(){
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const dispatch = useContext(AppContext).dispatch;
    const err = []
    const onSubmit = async e =>{
        e.preventDefault();
        const data = new FormData(e.target);

        const title = data.get("title");
        if(title.slice(0,1) !== title.slice(0,1).toUpperCase()){
            err.push([...errors,"Tytuł 1 zadania musi być z wielkiej litery!"])
        }
        // if{

        // }
        if(errors.length !=0){
            return;
        }
        console.log(errors)
            setErrors([]);
        setSending(true);
        await new Promise(res => setTimeout(res, 1000));
        dispatch({
            type:"add",
            data:{}
        })
        setSending(false);
        for(let key of data.keys()){
            e.target[key].value = "";
        }
    }

    return (
        <>
        {errors.map(e=><span>{e}</span>)}
            <form onSubmit={onSubmit}>

                <label htmlFor="title">Tytuł zadania</label>
                <input name="title" required minLength="3" maxLength="20"/>
                <button type="submit"></button>
                
                </form>    
        </>
    )
}

export default CreateForm; 