import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col,
} from 'reactstrap';
import './CardRandom.css';

class CardRandom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data,
        })
      })
  }

  render() {
    const { movie } = this.state
    return (
      <div className="CardRandom">
        <Container>
          <Row className="mt-5 ligne-card-movie">
            {movie[0] ? 
            movie.map((element) => (
              <Col lg="4" md="6" xs="9" className="mt-5">
                <Card>
                  <CardBody className="body-card">
                    <CardTitle className="body-card-title">{element.titre}</CardTitle>
                    <CardSubtitle>{element.genre} </CardSubtitle>
                  </CardBody>
                  <img className="image-card" width="100%" src={element.affiche} alt="affiche film" />
                  <CardBody className="body-card">
                    <CardText>Année de sortie : {element.sortie}</CardText>
                    <CardSubtitle>Réalisateur :  {element.realisateur}</CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            )) : <p>Rien</p>}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardRandom;