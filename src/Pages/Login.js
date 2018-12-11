import React from 'react'
// import {
//     Paper,
//     Typography,
//     FormControl,
//     InputLabel,
//     Button,
//     Input,
// } from '@material-ui/core'

class Login extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleLogin = () => {
        this.props.history.push('/user')
    }

    render() {
        const {
            email,
            password
        } = this.state

        return(
            // <Paper>
            //     <Typography component="h1" variant="h5">
            //     Sign in
            //     </Typography>
            //     <form onSubmit={this.handleSubmit}>
            //         <FormControl margin="normal" required fullWidth>
            //             <InputLabel htmlFor="email">Email Address</InputLabel>
            //             <Input id="email" name="email" value={email} onChange={this.handleOnChange} autoComplete="email" autoFocus />
            //         </FormControl>
            //         <FormControl margin="normal" required fullWidth>
            //             <InputLabel htmlFor="password">Password</InputLabel>
            //             <Input name="password" type="password" id="password" value={password} onChange={this.handleOnChange} autoComplete="current-password" />
            //         </FormControl>
            //         <Button
            //             type="submit"
            //             fullWidth
            //             variant="contained"
            //             color="primary"
            //         >
            //             Sign in
            //         </Button>
            //     </form>
            // </Paper>
            <div>
                <button onClick={this.handleLogin}>
                    LOGIN
                </button>
            </div>
        )
    }
}

export default Login