import Btn from "../button/Btn"
import './login.css'

const Login = () => {

    var log = () => {
        console.log("hello");
    }

    return (
        <div className="login">
            <Btn text={"Connect Wallet to login"} func={log} />
            <Btn text={"Register"} func={log} />

        </div>
    )
}

export default Login