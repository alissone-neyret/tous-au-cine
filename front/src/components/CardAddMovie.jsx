import React, { Component } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, FormGroup, Label, Input, Button, Alert,
} from 'reactstrap';
import './CardAddMovie.css';

class CardAddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      realisateur: "",
      sortie: "",
      genre: "",
      affiche: "",
      alerte: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  onDismiss(){
    this.setState({
      alerte: false,
    })
  }

  addMovie() {
    const data = {
      titre: this.state.titre,
      realisateur: this.state.realisateur,
      sortie: this.state.sortie,
      genre: this.state.genre,
      affiche: this.state.affiche,
    }
    fetch("http://localhost:5000/api/movie",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        res => this.setState({ "flash": res.flash }),
        err => this.setState({ "flash": err.flash })
      )
      .then(
        this.setState({
          titre: "",
          realisateur: "",
          sortie: "",
          genre: "",
          affiche: "",
        })
      )
      .then(
        this.setState({
          alerte: true,
        })
      )
  }

  render() {
    return (
      <div className="CardAddMovie">
        <Container className="container-add-card">
          <Row className="row-add-card">
            <Col lg="6">
              <h2>Ajouter un film</h2>
            </Col>
          </Row>
          <Row className="row-form-add-card">
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    <FormGroup>
                      <Label for="titre">Titre</Label>
                      <Input onChange={this.handleChange} type="text" name="titre" placeholder="titre du film" value={this.state.titre} />
                    </FormGroup>
                  </CardTitle>
                  <CardSubtitle>
                    <FormGroup>
                      <Label for="genre">Genre</Label>
                      <Input onChange={this.handleChange} type="text" name="genre" placeholder="action, comedie" value={this.state.genre} />
                    </FormGroup>
                  </CardSubtitle>
                  <CardText>
                    <FormGroup>
                      <Label for="affiche">Affiche</Label>
                      <Input onChange={this.handleChange} type="text" name="affiche" placeholder="coller URL" value={this.state.affiche} />
                    </FormGroup>
                  </CardText>
                  <CardText>
                    <FormGroup>
                      <Label for="sortie">Année sortie</Label>
                      <Input onChange={this.handleChange} type="text" name="sortie" placeholder="2010, 2009" value={this.state.sortie} />
                    </FormGroup>
                  </CardText>
                  <CardSubtitle>
                    <FormGroup>
                      <Label for="realisateur">Realisateur</Label>
                      <Input onChange={this.handleChange} type="text" name="realisateur" placeholder="prenom et nom" value={this.state.realisateur} />
                    </FormGroup>
                  </CardSubtitle>
                  <Button color="success" onClick={this.addMovie}>Ajouter</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {this.state.alerte === false
            ?
            ""
            :
            <Alert color="success" toggle={this.onDismiss}>Le film a bien été ajouté</Alert>}
        </Container>
      </div>
    );
  }
}

export default CardAddMovie;

