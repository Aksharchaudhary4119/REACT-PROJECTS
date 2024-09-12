import { useState } from "react";

const Validate = (initValue,initError) => {
    const [inp,setInp] = useState(initValue)
    const [errors,setError] = useState(initError)
    const InputChangeHandle = (e)=>{
        // console.log("called from custom hook",e);
        setInp((inp)=>({...inp,[e.target.name]:e.target.value}))
        let ErrorSpnID = [e.target.name]+"Error";
        if (e.target.value == "") {
            setError({...errors,[ErrorSpnID]:"This field is required"})
        }else{
            setError({...errors,[ErrorSpnID]:""})
        }
    }
    return {InputChangeHandle,inp,errors}
};

export default Validate;