import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//icons import
import {LightbulbOutlined as NotesIcon, NotificationsNoneOutlined as RemindersIcon,CreateOutlined as EditIcon,ArchiveOutlined as ArchiveIcon,DeleteOutlined as DeleteIcon} from '@mui/icons-material';
// import LightbulbCircleOutlinedIcon from '@mui/icons-material/LightbulbCircleOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const SwipeMenuList = ({ open }) => {
    const menuList=[
        {id:1,name:'Notes',icon:<NotesIcon/>},
        {id:2,name:'Reminders',icon:<RemindersIcon/>},
        {id:3,name:'Edit Labels',icon:<EditIcon/>},
        {id:4,name:'Archive',icon:<ArchiveIcon/>},
        {id:5,name:'Trash',icon:<DeleteIcon/>},
    ]
    return (
        <>

            <List>
                {menuList.map(list => (
                    <ListItem key={list.id} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {list.icon}
                            </ListItemIcon>
                            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default SwipeMenuList;