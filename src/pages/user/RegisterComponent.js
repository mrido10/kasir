import React, { Component } from 'react'

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName : null,
            lastName : null,
            email : null,
            phone : null,
            password : null,
            rePassword : null,
            placeholder : null
        }
    }

    setStateInputText = () => {
        this.setState({
            firstName : document.getElementsByClassName('inputText')[0],
            lastName : document.getElementsByClassName('inputText')[1],
            email : document.getElementsByClassName('inputText')[2],
            phone : document.getElementsByClassName('inputText')[3],
            password : document.getElementsByClassName('inputText')[4],
            rePassword : document.getElementsByClassName('inputText')[5],
            placeholder : document.getElementsByClassName('placeholder')
        })
    }

    enterKeyPressed = (e) => {
        let activeElement = e.target.classList[1]
        if (e.charCode === 13) {
            if (activeElement === this.state.firstName.classList[1]) {
                this.state.lastName.focus()
            } else if (activeElement === this.state.lastName.classList[1]) {
                this.state.email.focus()
            } else if (activeElement === this.state.email.classList[1]) {
                this.state.phone.focus()
            } else if (activeElement === this.state.phone.classList[1]) {
                this.state.password.focus()
            } else if (activeElement === this.state.password.classList[1]) {
                this.state.rePassword.focus()
            } else if (activeElement === this.state.rePassword.classList[1]) {
                this.handleSubmit()
            }
        }
    }

    onFocusOnBlur = (e) => {
        let activeElement = e.target.classList[1]
        let placeholder = this.state.placeholder
        let onName = e._reactName
        let str = [
            'First Name',
            'Last Name',
            'Email',
            'Phone',
            'Password',
            'Re-type Password'
        ]
        
        let style
        if (onName === 'onFocus') {
            style = {
                topPos : (-27),
                fontSize : 14,
                color : '#9BA0A8'
            }
        } else if (onName === 'onBlur') {
            style = {
                topPos : (-46),
                fontSize : 9.499,
                color : '#3B4048'
            }
        }
        
        if (activeElement === this.state.firstName.classList[1]) {
            if ((onName === 'onBlur' && this.state.firstName.value.trim() !== '') || 
                (onName === 'onFocus' && this.state.firstName.value.trim() !== '')) return
            placeholder[0].innerHTML = str[0]
            this.animation(placeholder, 0, onName, style)
        } else if (activeElement === this.state.lastName.classList[1]) {
            if ((onName === 'onBlur' && this.state.lastName.value.trim() !== '') || 
                (onName === 'onFocus' && this.state.lastName.value.trim() !== '')) return
            placeholder[1].innerHTML = str[1]
            this.animation(placeholder, 1, onName, style)
        } else if (activeElement === this.state.email.classList[1]) {
            if ((onName === 'onBlur' && this.state.email.value.trim() !== '') ||
                (onName === 'onFocus' && this.state.email.value.trim() !== '')) return
            placeholder[2].innerHTML = str[2]
            this.animation(placeholder, 2, onName, style)
        } else if (activeElement === this.state.phone.classList[1]) {
            if ((onName === 'onBlur' && this.state.phone.value.trim() !== '') || 
                (onName === 'onFocus' && this.state.phone.value.trim() !== '')) return
            placeholder[3].innerHTML = str[3]
            this.animation(placeholder, 3, onName, style)
        } else if (activeElement === this.state.password.classList[1]) {
            if ((onName === 'onBlur' && this.state.password.value.trim() !== '') ||
                (onName === 'onFocus' && this.state.password.value.trim() !== '')) return
            placeholder[4].innerHTML = str[4]
            this.animation(placeholder, 4, onName, style)
        } else if (activeElement === this.state.rePassword.classList[1]) {
            if ((onName === 'onBlur' && this.state.rePassword.value.trim() !== '') ||
                (onName === 'onFocus' && this.state.rePassword.value.trim() !== '')) return
            placeholder[5].innerHTML = str[5]
            this.animation(placeholder, 5, onName, style)
        }
    }

    animation = (plc, idx, name, style) => { 
        for (let i = 0; i < 38 ; i++) {
            (function(n) {
                setTimeout(() => {
                    if (name === 'onFocus') {
                        if (style.topPos === -45) {
                            style.color = '#3B4048'
                        } else {
                            style.topPos -= 0.5 
                            style.fontSize -= 0.15
                        }
                    } else if (name === 'onBlur') {
                        if (style.topPos === -28) {
                            style.color = '#9BA0A8'
                        } else {
                            style.topPos += 0.5 
                            style.fontSize += 0.15
                        } 
                    }
                    plc[idx].style.top = style.topPos + 'px'
                    plc[idx].style.fontSize = style.fontSize + 'px'
                    plc[idx].style.color = style.color
                }, 2 * (n+1))
            })(i)
        }
    }

    handleSubmit = () => {
        let submit = true
        let placeholder = this.state.placeholder
        if (this.state.firstName.value.trim() === '') {
            placeholder[0].innerHTML = '* First Name'
            placeholder[0].style.color = '#ff8080'
            submit = false
        }
        if (this.state.lastName.value.trim() === '') {
            placeholder[1].innerHTML = '* Last Name'
            placeholder[1].style.color = '#ff8080'
            submit = false
        }
        if (this.state.email.value.trim() === '') {
            placeholder[2].innerHTML = '* Email'
            placeholder[2].style.color = '#ff8080'
            submit = false
        }
        if (this.state.phone.value.trim() === '') {
            placeholder[3].innerHTML = '* Phone'
            placeholder[3].style.color = '#ff8080'
            submit = false
        }
        if (this.state.password.value.trim() === '') {
            placeholder[4].innerHTML = '* Password'
            placeholder[4].style.color = '#ff8080'
            submit = false
        }
        if (this.state.rePassword.value.trim() === '') {
            placeholder[5].innerHTML = '* Re-type Password'
            placeholder[5].style.color = '#ff8080'
            submit = false
        }

        if (submit) {

        }
    }

    componentDidMount() {
        this.setStateInputText()
    }

    render() { 
        return (
            <>
            <div id='doLogin' >
                <div className='headerBox'>
                    <div className='title'>Have Account?</div>
                    <div className='detail'>Login with your personal info</div>
                </div>
                <div className='contentBox'>
                    <button className='moveItem' type='button' onClick={this.props.move}>Sign In</button>
                </div>
            </div>
            <div id='registerBox'>
                <div className='title'><h1>Create Your Account</h1></div>
                <div className='inputBox'>
                    <div className='input'>
                        <input className='inputText firstName' type='text' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[0]).top === ('-45px')) return
                            this.state.firstName.focus()}}>First Name</div>
                    </div>
                    <div className='input'>
                        <input className='inputText lastName' type='text' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[1]).top === ('-45px')) return
                            this.state.lastName.focus()}}>Last Name</div>
                    </div>
                </div>
                <div className='inputBox'>
                    <div className='input'>
                        <input className='inputText email' type='text' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[2]).top === ('-45px')) return
                            this.state.email.focus()}}>Email</div>
                    </div>
                    <div className='input'>
                        <input className='inputText phoneNumber' type='text' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[3]).top === ('-45px')) return
                            this.state.phone.focus()}}>Phone</div>
                    </div>
                </div>
                <div className='inputBox'>
                    <div className='input'>
                        <input className='inputText password' type='password' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[4]).top === ('-45px')) return
                            this.state.password.focus()}}>Password</div>
                    </div>
                    <div className='input'>
                        <input className='inputText rePassword' type='password' onKeyPress={this.enterKeyPressed} onFocus={this.onFocusOnBlur} onBlur={this.onFocusOnBlur} />
                        <div className='placeholder' onClick={() => {
                            if (getComputedStyle(this.state.placeholder[5]).top === ('-45px')) return
                            this.state.rePassword.focus()}}>Re-type Password</div>
                    </div>
                </div>
                <div className='inputBox submit'>
                    <div className='submitBox'>
                        <input className='submitBtn' type='button' value='Sign Up' onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
            </>
        )
    }
}
 
export default RegisterComponent;