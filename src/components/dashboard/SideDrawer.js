import React from 'react'
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon ,ListItemText, Toolbar}from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import QueueIcon from '@mui/icons-material/Queue';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import ApprovalIcon from '@mui/icons-material/Approval';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

const SideDrawer = () => {
  return (
    <div>
      <Toolbar style={{ backgroundColor : '#930dd1'}}/>
        <Divider />
        <List>
          {[{label : 'Dashboard', icon : <HomeIcon color='primary'/>},{label : 'Update Profile', icon : <ManageAccountsIcon color='primary'/>},{label : 'View Records', icon : <ViewListIcon color='primary'/>}].map((text, index) => (
            <ListItem key={text.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{label : 'Add New Records', icon : <GroupAddIcon color='primary'/>}, 
            {label:'Add Grades', icon: <QueueIcon color='primary'/>}, 
            {label:'Post New Events', icon: <ApprovalIcon color='primary'/>}, 
            {label:'Requests', icon: <DynamicFeedIcon color='primary'/>}, 
            {label:'View Events', icon: <BallotIcon color='primary'/>}].map((text, index) => (
            <ListItem key={text.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{label:'Help', icon : <InfoIcon color='primary'/>},{ label:'Log out', icon: <LogoutIcon color='primary'/>}].map((text, index) => (
            <ListItem key={text.label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
  )
}

export default SideDrawer