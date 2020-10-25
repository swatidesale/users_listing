import React, { Component } from 'react'
import { connect } from 'react-redux'

import './UserDetailsPage.scss'

import { getUsersList } from '../../actions'

class UserDetailsPage extends Component {
  constructor(props) {
		super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsersList())
  }

  render() {
    const { usersList } = this.props

    let user
    if(usersList.users) {
      user = usersList.users.usersData[0]
    }

    return(
      <section className="card">
        { user && (<div className="container">
          <div className="profile">
             <img className="profile-img-default" src={ user.profile } alt={ user.username }/>
          </div>

          <div className="details">
            <h3 className="user-name">{ user.name }</h3>
            <div className="contact-info">
              <div className="phone"><span className="header">Phone: </span>{ user.phone }</div>
              <div className="email"><span className="header">Email: </span>{ user.email }</div>
            </div>
            <div>
              <h4 className="company-details">Company Details: </h4>
              <div><span className="header">Company Name: </span>{ user.company.name }</div>
              <span><span className="header">Phrase: </span>{ user.company.catchPhrase }</span>
              <div><span className="header">Company Address: </span>{ user.company.bs }</div>
            </div>
          </div>
        </div> )}
      </section>
    )
  }
}


const connectedUserDetails = connect(state => ({
  usersList: state.users
}))(UserDetailsPage)

export default connectedUserDetails