import React, { Component } from 'react';
import { Form, FormGroup, Button, Input,} from 'reactstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mots: "",
     }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };


  render() { 
    return ( 
      <div className="SearchBar">
        <Form className="formulaire">
          <FormGroup>
            <Input className="input-search-bar" type="text" name="mots" onChange={this.handleChange} value={this.state.mots} />
          </FormGroup>
          <Button className="button-search">Rechercher</Button>
        </Form>
      </div>
     );
  }
}
 
export default SearchBar;