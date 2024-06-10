import Input from "../../ui/Input/Input.jsx";
import "./Search.scss"

export default function Search({placeholder}) {
    return (
        <div className="search">
                <Input placeholder={placeholder}
                       sx={
                           {
                               padding: "16px",
                               height: "41px",
                           }
                       }
                />
        </div>
    )
}
