import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState } from "react";
import '../App.css';
//icons import
import { LightbulbOutlined as NotesIcon, ArchiveOutlined as ArchiveIcon, DeleteOutlined as DeleteIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";



const SwipeMenuList = ({ open, handleDrawer}) => {
    const menuList = [
        { id: 1, name: 'Notes', icon: <NotesIcon />, route: "/" },
        { id: 2, name: 'Archive', icon: <ArchiveIcon />, route: "/archive" },
        { id: 3, name: 'Trash', icon: <DeleteIcon />, route: "/trash" },
    ]
    const [selectedTag,setSelectedTag]=useState(1)
    return (
        <>
            <List>
                {menuList.map(list => (
                    <ListItem key={list.id} disablePadding 
                    sx={{ display: 'block', 
                    backgroundColor: selectedTag === list.id?'rgba(0,130,240,0.8)':"white",
                    borderRadius: selectedTag === list.id?'0 70px 0 70px':"0",
                    padding: selectedTag === list.id?'-10px':"0"
                    }}  
                   
                    // onMouseHover={handleDrawer}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 38,
                                justifyContent: open ? 'initial' : 'initial',
                                px: 2.5,
                                backgroundRadius:open? '10px':'',

                            }}
                            onClick={()=>setSelectedTag(list.id)}
                           
                        >
                            <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        ml: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        

                                    }}
                                    onMouseOver={handleDrawer}
                                                     
                                >
                                    {list.icon}
                                </ListItemIcon>

                                <ListItemText primary={list.name}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                       
                                    }} 
                                    onClick={handleDrawer}
                                    />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default SwipeMenuList;