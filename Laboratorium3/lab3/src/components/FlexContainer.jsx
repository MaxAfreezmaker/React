import AppReducer from "../data/AppReducer";
import { useReducer } from "react";

function FlexContainer({ element, data}) {

    const[rate, dispatch] = useReducer(AppReducer,data);

    return ( 
        <div className="d-flex justify-content-center flex-wrap mt-3">
            { data.map(e => element({...e, dispatch})) }
        </div>
     );
}

export default FlexContainer;