import React from 'react'
import Card from 'react-bootstrap/Card';

 function Player( { joueur}) {
  return (
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={joueur.imageUrl} />
    <Card.Body>
      <Card.Title>{joueur.name}</Card.Title>
      <Card.Text>{joueur.team}</Card.Text>
      <Card.Text>{joueur.nationality} </Card.Text>
      <Card.Text>{joueur.jerseyNumber}</Card.Text>
      <Card.Text>{joueur.age}</Card.Text>
    </Card.Body>
  </Card>
  )
}   
export default Player