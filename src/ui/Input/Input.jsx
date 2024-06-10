import "./Input.scss"
import {Input as MUIInput} from '@mui/material';

const Input = ({...props}) => {
    return (
        <MUIInput
            {...props}
            className={"input"}
            size="medium"
        />
    );
};

export default Input;