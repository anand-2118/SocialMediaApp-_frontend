import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import User from './User'
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState([
  ])
  const [newUser, setNewUser] = useState(
    {
    "username": "abcd",
    "email": "abcd@gmail.com",
    "name": "bacd",
    "profileImage": "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    "bio": "hello, i am developer",
  }
  )

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:4000/api/users')
      .then((res) => setUsers(res.data.data))
      .catch((error) => console.log(error))
  }

  const createUser = () => {
    axios.post('http://localhost:4000/api/users',newUser)
      .then((res) => fetchUsers())
      .catch((error) => console.log(error))
  }
  return (
    <Container>
      <Row>
        {users.map(user => {
          return <Col md={3} key={user._id}>
            <User user={user} />
          </Col>
        })
        }
      </Row>
      <Button onClick={createUser} style={{marginTop:'5rem'}}>Add new Button</Button>
    </Container>
  )
}
