import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsersList } from './actions'
import './App.scss'

class App extends Component {
  constructor(props) {
		super(props)
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsersList())
  }

  render() {   
    const { usersList } = this.props
    return(
      <div>
        <h2 className="users_listing_header">Users Listing</h2>
        <div className="category_section page-module"></div>
          <ul className="userlist usergrid">
            { usersList.users && usersList.users.usersData.map(user =>
              (<li key={ user.id } className="user hovercard">
              <div className="userbox">
                <a className="user-img">
                  <img className="user-img-default" src={ user.profile } alt={ user.username }/>
                </a>
                <div>
                  <a className="user-info-block">
                    <div className="user-title">
                      <span className="user-title-header">Name: </span>{ user.name }
                    </div>
                    <div className="user-company">
                      <span className="user-title-header">Company: </span>{ user.company.name }
                    </div>
                  </a>
                </div>
              </div>
            </li> ))}
          </ul>
      </div>
    )
  }
}

const connectedUsersList = connect(state => ({
  usersList: state.users
}))(App)

export default connectedUsersList
