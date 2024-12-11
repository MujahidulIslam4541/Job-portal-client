import { useContext } from "react";
import AuthContext from "../../context/AuthContext";


const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext)

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;