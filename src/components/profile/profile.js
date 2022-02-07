
import { useSelector } from "react-redux";
import { Login } from "./login";

export function Profile({}) {

    const store = useSelector(state => state.profile)
    const sign = store.sign
    if(sign){
        return <p>logged in</p>
    }else{
        return <Login/>
    }
}