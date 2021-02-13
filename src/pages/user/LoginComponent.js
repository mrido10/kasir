import React, { Component } from 'react'

class LoginComponent extends Component {
    componentDidMount() {

    }
    
    render() { 
        return (
            <>
            <div id='doRegister' >
                <div className='headerBox'>
                    <div className='title doReg'>Don't Have Account?</div>
                    <div className='detail'>Please Register Your Account</div>
                </div>
                <div className='contentBox'>
                    <button className='moveItem' type='button' onClick={this.props.move}>Sign Up</button>
                </div>
            </div>
            <div id='boxUser'>
                <div id='boxLogin'>ini loginnnnnnn</div>
            </div>
            </>
            
        )
    }
}
 
export default LoginComponent;