import React,{Component} from 'react';
import User from '../Component/User';
import HeaderBar from '../Component/HeaderBar'

class Dashboard extends Component{

    render(){
        return <div>
            <HeaderBar/>
            <User/>
        </div>
    }
}

export default Dashboard;