import React,{Component} from 'react';
import {AppBar,Typography,Toolbar,Button} from '@material-ui/core';

class HeaderBar extends Component{
render(){
    return <AppBar position = "static">
<Toolbar>
    <Typography variant ="h4" className = "appbarTitle">
        UserInfo
    </Typography>
    <Button colour="inherit" position= "end">Edit</Button>
    <Button colour="inherit" position="end">List</Button>
    <Button colour="inherit" position="end">Logout</Button>
</Toolbar>

    </AppBar>
}
}

export default HeaderBar;