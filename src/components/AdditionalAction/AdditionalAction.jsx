import {IconButton, Menu, MenuItem} from "@mui/material";
import * as React from "react";
import Icon from "../../ui/Icon/Icon.jsx";

export default function AdditionalAction({row}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedRow, setSelectedRow] = React.useState(null);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const handleAction = (action) => {
        console.log(`Action: ${action}, Row:`, selectedRow);
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
                <MenuItem onClick={() => handleAction('Action 1')}>Action
                    1</MenuItem>
                <MenuItem onClick={() => handleAction('Action 2')}>Action
                    2</MenuItem>
                <MenuItem onClick={() => handleAction('Action 3')}>Action
                    3</MenuItem>
            </Menu>
        </>
    )
}
