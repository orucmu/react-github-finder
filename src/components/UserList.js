import React, { Component } from 'react';
import User from './User'

export class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    id: "107304926",
                    name: "Mustafa Oruç",
                    username: "orucmu",
                    avatar_url: "https://avatars.githubusercontent.com/u/107304926?v=4",
                    github_url: "https://github.com/orucmu",
                    following: "2"
                },
                {
                    id: "1",
                    name: "Tom Preston-Werner",
                    username: "mojombo",
                    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                    github_url: "https://github.com/mojombo",
                    following: "11"
                },
                {
                    id: "2",
                    name: "Chris Wanstrath",
                    username: "defunkt",
                    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                    github_url: "https://github.com/defunkt",
                    following: "210"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (
                        <User user={user} key={user.id} />
                    ))
                }
            </div>
        )
    }
}

export default UserList