import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default function User({user}) {
    const {username,email,name,profileImage,bio} = user
    return (
        <div>
            <Card style={{ width: '18rem', marginTop:'2rem' }}>
                <Card.Img variant="top" src={profileImage} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>@{username}</Card.Subtitle>
                    <Card.Subtitle>{email}</Card.Subtitle>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                    <Button variant="primary">+ Add Connection</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
