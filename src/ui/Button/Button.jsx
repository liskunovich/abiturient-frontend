import "./Button.scss"
import {Button as MUIButton} from '@mui/material';

const Button = ({text, ...props}) => {
    return (
        <MUIButton
            {...props}
            variant="outlined"
            className={"button"}
            size="medium"
        >
            {text}
        </MUIButton>
    );
};

export default Button;