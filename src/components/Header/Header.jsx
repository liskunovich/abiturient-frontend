import Link from "../../ui/Link/Link.jsx";
import "./Header.scss";
import Button from "../../ui/Button/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const settings = ['Профиль', 'Панель', 'Выход'];

function getActiveLinkClasses({isActive}) {
    let activeLinkClasses = isActive ? "active" : "";
    return ["link", activeLinkClasses].join(" ");
}

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    const handleMenuClick = (setting) => {
        setAnchorElUser(null);
        if (setting === 'Профиль') {
            navigate('/profile');
        }
    };
    
    return <div className="header">
        <div className="container">
            <div className="header__inner">
                <div className="left">
                    <h4>Абитуриент</h4>
                </div>
                <div className="middle">
                    <Link to={"/specializations"} className={getActiveLinkClasses}>Специальности</Link>
                    <Link to={"/universities"} className={getActiveLinkClasses}>ВУЗы</Link>
                    <Link to={"/statistics"} className={getActiveLinkClasses}>Статистика</Link>
                </div>
                <div className="right">
                    <Button text={"Поделиться"}/>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="David Liskunovich" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                              <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                                  <Typography textAlign="center">{setting}</Typography>
                              </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </div>
            </div>
        </div>

    </div>
}
export default Header;
