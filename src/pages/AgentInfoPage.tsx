import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const AgentInfoPage = () => {

    type AgentParams = {
        id: string;
    };


    const [message, setMessage] = useState('');
    const { id } = useParams<AgentParams>();

    useEffect(() => {
        if (id) {
            setMessage('The Agent is ' + id);
        }
        else {
            setMessage('No Agent was provided')
        }
    })


    return (
        <div>
            <p style={{ color: "white" }}> This is the Agent Info Page</p>
            <p style={{ color: "white" }}> {message}</p>
        </div>
    )
}
