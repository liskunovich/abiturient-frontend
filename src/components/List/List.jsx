import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./List.scss"
import Icon from "../../ui/Icon/Icon.jsx";
import {ListItemIcon} from "@mui/material";

export default function BasicList({data, primary, secondary, iconName}) {
    return (
        <Box className="list" sx={{
            width: '100%',
            gap: "1px",
            maxHeight: "400px",
            bgcolor: 'background.paper',
            border: "1px solid #E0E0E0",
            borderRadius: "8px"
        }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {data?.map((val, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton component="a" href={val[secondary]} target="_blank" rel="noopener noreferrer">
                                <ListItemIcon>
                                    <Icon name={iconName}/>
                                </ListItemIcon>
                                <ListItemText primary={val[primary]} secondary={val[secondary]} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    );
}
