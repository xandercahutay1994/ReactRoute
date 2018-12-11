import React from 'react'

class User extends React.PureComponent {


    handleLogout = () => {
        this.props.history.push('/login')
    }

    render() {
        return(
            <div>
                User
                <button onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        )
    }
}

export default User