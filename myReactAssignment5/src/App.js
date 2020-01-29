import React, { Component } from "react";
import "./App.css";
import Person from "./Person";
import imagi from './Assets/giyuu.jpg'
import like from './Assets/like.svg'
import share from './Assets/share.svg'
import comments from './Assets/opinion.svg'
// import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {

    var { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading.....</div>
    }
    else {
      return (
        < div className="frame" >
          {items.map(item => <Person key={item.id} title={item.title} body={item.body} name={"Giyuu Tomioka"} body1={comment} image={imeg} />)};
          <br />
        </div >
      )
    }

  }

}


var imeg = <img class="giyuu" src={imagi} alt="Giyuu Tomioka"></img>
var comment = <p>
  <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
  <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
  <div>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
  <div class="imgcollection"> <img class="like" src={like} alt="Like Button" /> <img class="like" src={share} alt="Share Button" /> <img class="like" src={comments} alt="Comment Button" /> </div>
</p>

export default App;
