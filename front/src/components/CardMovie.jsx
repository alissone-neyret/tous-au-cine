import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, Button,
} from 'reactstrap';
import './CardMovie.css';

class CardMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
    }
    this.comedie = this.comedie.bind(this);
    this.historique = this.historique.bind(this);
    this.scienceFiction = this.scienceFiction.bind(this);
    this.animation = this.animation.bind(this);
    this.policier = this.policier.bind(this);
    this.all = this.all.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api")
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data,
        })
      })
  }

  comedie() {
    const listComedie = this.state.movie.filter(genre => genre.genre === "Comédie")
    this.setState({
      movie: listComedie
    })
  }

  historique() {
    const listHistorique = this.state.movie.filter(genre => genre.genre === "Historique")
    this.setState({
      movie: listHistorique
    })
  }

  scienceFiction() {
    const listSF = this.state.movie.filter(genre => genre.genre === "Science Fiction")
    this.setState({
      movie: listSF
    })
  }

  animation() {
    const listAnimation = this.state.movie.filter(genre => genre.genre === "Animation")
    this.setState({
      movie: listAnimation
    })
  }

  policier() {
    const listPolicier = this.state.movie.filter(genre => genre.genre === "Policier")
    this.setState({
      movie: listPolicier
    })
  }

  all() {
    fetch("http://localhost:5000/api")
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data,
        })
      })
  }

  delete(id) {
    fetch('http://localhost:5000/api/movie' + id, {
      method: 'delete'
    })
      .then(res => res)
      .then( () => {
        fetch('http://localhost:5000/api')
          .then( res => res.json())
          .then (data => this.setState({
            movie: data
          }))
      })
  }

  render() {
    return (
      <div className="CardMovie">
        <Container className="card-movie">
          <Row className="row-buton-tri">
            <Col lg="2">
              <Button onClick={this.comedie}>Comédie</Button>
            </Col>
            <Col lg="2">
              <Button onClick={this.historique}>Historique</Button>
            </Col>
            <Col lg="2">
              <Button onClick={this.scienceFiction}>Science Fiction</Button>
            </Col>
            <Col lg="2">
              <Button onClick={this.animation}>Animation</Button>
            </Col>
            <Col lg="2">
              <Button onClick={this.policier}>Policier</Button>
            </Col>
            <Col lg="2">
              <Button onClick={this.all}>Tous</Button>
            </Col>


          </Row>
          <Row className="mt-5 ligne-card-movie">
            {this.state.movie.map((element) => (
              <Col key={element.id} lg="4" md="6" xs="9" className="mt-5">
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
                  <Button onClick={ () => {this.delete(element.id)}} color="danger" >Supprimer</Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardMovie;