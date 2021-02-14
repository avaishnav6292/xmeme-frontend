import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        memes : []
    }
}

componentDidMount() {
    fetch('https://xmeme-backend-ashutoshv.herokuapp.com/memes',{
        method:'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(data => {return data.json();})
    .then(data => {
        this.setState({
            memes: data.map(meme => ({
                id: meme.id,
                name: meme.name,
                caption: meme.caption,
                url: meme.url
            }))
        });
    })
    .catch(err => {console.log(err);})
}


  render() {
    const {memes} = this.state;
        const memesPosted = memes.map(meme => <Image id={meme.id} name={meme.name} caption={meme.caption} url={meme.url} />);
    return (
      
      <div className="App">
          <Form />
          <div className="meme-section">
                {memesPosted}
          </div>
      </div> 
    );
  }
}


export default App;
