import {IconButton, Menu, MenuItem} from "@mui/material";
import * as React from "react";
import Icon from "../../ui/Icon/Icon.jsx";
import {useNavigate} from "react-router-dom";

export default function AdditionalAction({row}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedRow, setSelectedRow] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const handleAction = (action) => {
        navigate(action)
        handleClose();
    };

    return (
        <>
            <IconButton onClick={(event) => handleClick(event, row)}>
                <Icon name={"additional_actions"}/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleAction(row.id)}>Перейти</MenuItem>
                <MenuItem onClick={() => handleAction('Action 2')}>Поделиться</MenuItem>
            </Menu>
        </>
    )
}
