import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../static/logo1.png';



const Heading = styled(AppBar)`
    z-index:1202;
    background:#fff;
    height:70px;
    box-shadow:inset 0 -1px 0 0 #dadce0;
`;

const HeaderBar = ({ open, handleDrawer }) => {
    return (
        <>
            <Heading position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: '20px',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="logo" style={{ width: 60 }} />
                    <Typography style={{ color:'#0082F0' , fontWeight: 'bold', fontSize: '20px' }}>
                        BeZen Keep
                    </Typography>
                </Toolbar>
            </Heading>
        </>
    )
}

export default HeaderBar;