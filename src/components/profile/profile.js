
import { useSelector } from "react-redux";
import { Login } from "./login";
import {Header} from '../header/header'
import { ProfileSigned } from "./profile-signed";

export function Profile() {

    const store = useSelector(state => state.profile)
    const sign = store.sign

    return(
        <div>
            <Header/>
            {
                !sign ? <Login/> : <ProfileSigned/>
            }
        </div>

    )

}