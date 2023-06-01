import "./index.css";
import {useState} from "react";
import axios from "axios";


function App() {
    const [imageSelected, setImageSelected] = useState("");
    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "huhr8ln1");

        axios.post("https://api.cloudinary.com/v1_1/dfsi3fxgr/image/upload", formData).then((response) => {
            console.log(response.data.secure_url);
            console.log(response);
            console.log(response.data.url);
            setImageSelected(response.data.url);
        })
    }


    return (
        <div>
            <input type={"file"}
                   onChange={(event) => {
                       setImageSelected(event.target.files[0]);
                   }}/>
            <button onClick={uploadImage}>Upload Image</button>
            <img src={imageSelected} alt={""}/>
        </div>

    );
}

export default App;
