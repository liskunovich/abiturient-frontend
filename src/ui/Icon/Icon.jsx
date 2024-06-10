import icons from "./icons.json"
import "./Icon.scss"

const Icon = ({name}) => {
    return (
        <div
            dangerouslySetInnerHTML={{__html: icons[name]}}
        >
        </div>
    );
};

export default Icon;