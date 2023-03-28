import { useContext } from "react";
import { Context } from "../context/Context";
import Header from "../layout/Header";

function About(){

    const context = useContext(Context);

    return (
        <div className="bg-blue-600">
            <Header/>
            <h1>about</h1>
            <div onClick={context.increateNum}>Tang so</div>
        </div>
    );
}

export default About