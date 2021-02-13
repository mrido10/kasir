import React, { Component } from 'react'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent'

import '../.././assets/style/user/userRegister.css'
import '../.././assets/style/user/registerComponent.css'

class UserRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponent: false
        }
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow = () => {
        this.setState({
            showComponent: !this.state.showComponent
        }, () => {
            console.log('login', this.state.showComponent, '  |  register', !this.state.showComponent)
        })
    }

    render() { 
        return (
            <div id='userBox' className='userBox'>
                {this.state.showComponent ? <LoginComponent move={this.handleShow} /> : <RegisterComponent move={this.handleShow} />}
            </div>
        )
    }
}
 
export default UserRegister;