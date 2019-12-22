import React,{useContext} from 'react'
import contextValue from '../../context API/Context'
const UserCard = ({user}) => {
    const context = useContext(contextValue)
    return (
        <div className="col s12 m7">
      <div className="card horizontal transparent">
        <div className="card-image">
          <img src={require("../HomePage/Posts/avatar.png")} />
        </div>
        <div className="card-stacked transparent">
          <div className="card-content transparent">
            <h3 className="white-text">
              {user.firstname} {user.lastname}
            </h3>
            <h4 className="white-text">Username: {user.username}</h4>
            <h5 className="white-text">Email: {user.email}</h5>
          </div>
        </div>
      </div>
    </div>
    )
}

export default UserCard
