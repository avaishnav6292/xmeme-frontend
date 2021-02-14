import React from 'react';
import './Form.css';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      caption: undefined,
      url: undefined
    }
  }

  onNameInput = (event) => {
    this.setState({name: event.target.value})
  }

  onCaptionInput = (event) => {
    this.setState({caption: event.target.value})
  }
  onUrlInput = (event) => {
    this.setState({url: event.target.value})
  }

  onSubmit = () => {
    const {name, caption, url} = this.state;

    if (!name || !caption || !url) {
      alert('Field cannot be empty.');
    } else {
      fetch('https://xmeme-backend-ashutoshv.herokuapp.com/memes',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          caption: caption,
          url: url
        })
      })
      .catch(()=> console.log('Error'))
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="form-section">
      
        <div className="form-container">
        <h1>Meme Stream</h1>
          <form onSubmit={this.onSubmit}>
            <div className="input-group">
              <div className="input-group-label">Meme Owner</div>
              <input type="text" id="name" className="input-group-input" placeholder="Enter your full name" onChange={this.onNameInput}/>
            </div>

            <div className="input-group">
              <div className="input-group-label">Caption</div>
              <input type="text" id="caption" className="input-group-input"  placeholder="Be creative with the caption" onChange={this.onCaptionInput}/>
            </div>

            <div className="input-group">
              <div className="input-group-label">Meme URL</div>
              <input type="text" id="url" className="input-group-input"  placeholder="Enter URL of your meme here" onChange={this.onUrlInput}/>
            </div>
            
            <div className="input-group">
                <button>Submit Meme</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

 
export default Form;