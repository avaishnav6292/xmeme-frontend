import React from 'react';
import logo from '../../logo.svg';
import './Image.css';


class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            update : undefined
        }
    }

    deleteByID (key) {
        const check = window.confirm("Confirm delete Meme having id "+ key);
        if (check){    
        fetch('https://xmeme-backend-ashutoshv.herokuapp.com/memes/'+key, {
                method: "DELETE"
            })
            .catch(err => {console.log(err);});
            window.location.reload();

        } 
    }

    editByID (key, name, caption, url) {
        const newCaption = prompt(`Edit Meme by ${name} \nCaption`, caption);
        const newURL = prompt(`Edit Meme by ${name} \nURL`, url);
        fetch('https://xmeme-backend-ashutoshv.herokuapp.com/memes/'+key, {
                method: "PATCH",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    caption: newCaption,
                    url: newURL
                  })
            })
            .catch(err => {console.log(err);});
            window.location.reload();
    }

render() {
    const {key} = this.props;
    return (
            <div className="meme-card">
                <div className="meme-posted">
                    <div className="header">
                        <div className="header1"><h3>{this.props.name}</h3></div>
                        <div className="header2">
                            <button onClick={() => this.editByID(this.props.id, this.props.name, this.props.caption, this.props.url)} className="edit-button">Edit</button>
                            <button onClick={()=> this.deleteByID(this.props.id)}>Delete</button>
                        </div>
                    </div>
                    <p>{this.props.caption}</p>
                    <img width="80%" src={this.props.url} alt="Image not available"/>
                </div>
            </div>
      );
    }
}


export default Image;