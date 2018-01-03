import React, {Component} from 'react';
import './agile.css';


class AgileComponent extends Component {

    render() {
        return (
          <div className="agile">
              <p className="headline">Working With Microservices and Apis</p>
              <br />
              <br />
              
              
              <p className="headline2">Sometimes, to achieve good results, a good data flow is necessary.</p>
              <p className="headline2">Communication between tools allow events to happen faster and  more safely.</p>
               
                <p><img src="WebServices.gif" style = {{width:"80%"}}/></p>
                <br /><br />
                <p className="headline2">I modernized this api from an old XML Soap technology :</p>
                
                <p className="headline2"> I've set up a new api that translates calls, using a swagger documented REST Api</p>
                <p className="headline2"> I then created models to serve the relevant data through a new graphql api</p>
                
              
          </div>
        );
    }
}

export default AgileComponent;
