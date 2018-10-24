//Imports React Component to create a class named App
//This application is the main data parser for the application to host flickr photos in a Gallery container
import React, { Component } from 'react';


//Imports CSS
import './css/index.css';


/* App Components and API Key */
import apiKey from './config.js';
import Header from './Components/Header';
import Gallery from './Components/Gallery';

//Creates App Class
export default class App extends Component {

//Creating the constructor for the stateless objects
  constructor() {
    //This allows me to use the "this" keyword within my constructor
    super();
    this.state = {
      items: [],
      loading: true
    }
  }


//call a fetch function when the app mounts to the dom.
  componentDidMount() {
    this.mounted = true;
    if (this.props.match.path === '/') {
      this.setState( prevState => ({
        loading: false,
        items: [''],
        root: true
      }));
    } else {
      this.performSearch(this.props.match.params.id);
    }
  }


//runs perform search if a new id is entered
  componentDidUpdate(prevProps) {
      if(this.props.match.params.id !== prevProps.match.params.id) {
        this.performSearch(this.props.match.params.id);
      }
  }


  componentWillUnmount() {
    this.mounted = false;
  }

//Fetch data
  performSearch = (tags) => {
    this.setState(prevState => ({
      loading: true
    }));
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&safe_search=1&extras=relevance&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
      if (this.mounted) {
        this.setState(prevState => ({
           items: responseData.photos.photo,
           loading: false
         }));
      }
    })
    .catch(error => {
      console.log('Error fetching and parsing data ', error);
    });
  }


//Renders App Component
  render() {
    return (
        <div className="container">
          <Header onSearch={this.performSearch}/>
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Gallery data={this.state.items} title={this.props.match.params.id}  root={this.state.root} />
          }
        </div>
    );
  }
}
