import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profil</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          sessionStorage.clear();
          window.location.reload();
        }}
      >
        Chiqish
      </MenuItem>
    </Menu>
  );

  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/home");
  // }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="nav_desktop">
            <NavLink to="/home" className="nav">
              <HomeIcon
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className="mui_icon"
              ></HomeIcon>
            </NavLink>
            <NavLink className="nav" to="/standings">
              Turnir jadvali
            </NavLink>
            <NavLink className="nav" to="/matches">
              O'yinlar
              {/* https://www.google.com/search?q=apl+league+table+current&oq=apl+league+table+curr&aqs=chrome.1.69i57j33i160l3.10566j0j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11pz7zbpnb;2;/m/02_tc;mt;fp;1;;; */}
            </NavLink>
            <NavLink className="nav" to="/scorers">
              To'purarlar
            </NavLink>
            <NavLink className="nav" to="/settings">
              Sozlamalar
            </NavLink>
            <NavLink className="nav" to="/history">
              Amallar tarixi
            </NavLink>
            <NavLink className="nav" to="/support">
              Sayt haqida
            </NavLink>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          ></IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          ></IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle className="mui_icon" />
          </IconButton>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
