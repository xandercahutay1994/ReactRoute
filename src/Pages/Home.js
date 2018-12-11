import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

class Home extends React.PureComponent {
    render() {
    console.log(this.props.history.location.pathname)

        return(
            <div>
                Home
            </div>
        )
    }
}


export default Home