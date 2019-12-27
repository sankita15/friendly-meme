import React from "react";


export default class GuestInvitation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            message: ''
        }
    }

    handleNameChange = (value) => {
        this.setState({
            name: value
        })
    };

    handleInvitation() {
        const { name } = this.state;
        fetch(`/api/invite/${name}`, {
            headers: {
                ContentType: "application/json"
            },
            method: 'POST'
        })
            .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
            .then(message => this.setState({ message }))
            .catch(e => console.warn(e));
    }

    render() {
        const { message } = this.state;
        return(
            <div>
                <input
                    onChange={(e) => this.handleNameChange(e.target.value)}
                    placeholder="Enter Your Name For Invitation" />
                <button onClick={() => this.handleInvitation()}>Attend</button>
                {
                    message !== '' ? message : null
                }
            </div>
            )
    }
}