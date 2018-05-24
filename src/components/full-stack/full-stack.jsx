import React, {Component} from 'react';
import './full-stack.css';
import '../../../public/mfizz/font-mfizz.css';
import {List, ListItem} from 'material-ui/List';

import Subheader from 'material-ui/Subheader';

class FullStackComponent extends Component {
    render() {
        return (
          

<div className="text-center dark-voice">
            
            <b className="dark-voice-tag">&#x3C;Docker&#x3E; </b>
            <p><img src="docker.gif" style = {{width:"80%"}}/></p>
            

            <p className="headline2">I started experimenting with docker, with a very bad use case.</p>
            <p className="headline2">This is how you learn.</p>
            <p className="headline2">This specific project is very well designed however.</p>

            <p className="headline2">I've build this to train myself in designing microservices</p>

            <p className="headline2">I have also coded several services to make them work together in python (flask, django) </p>
            <p className="headline2">and using javascript (node.js)</p>
            <p className="headline2">A client frontend was build in react. Just like this portfolio</p>

            <div style={{ backgroundColor: "#eee"}}>


<List>
              <Subheader style={{paddingLeft:"50px"}}>This Docker Infrastructure runs :</Subheader>
              <ListItem 
                value={1}
                primaryText="Nginx reverse proxy"
                leftIcon={<i className="icon-nginx">Nginx</i>}
                />
              <ListItem 
                  value={2}
                  primaryText="A Flask Api"
                  leftIcon={<i className="icon-python">Python</i>}
                 />
              <ListItem
                  value={3}
                  primaryText="Porsgres SQL"
                  leftIcon={<i className="icon-postgres">Postgres</i>}
                 />
              <ListItem
                  value={4}
                  primaryText="Redis Message Queue in Pub/Sub mode"
                  leftIcon={<i className="icon-redis">Redis</i>}
                  />
              <ListItem
                  value={5}
                  primaryText="A custom program in python to manage events"
                  leftIcon={<i className="icon-python">Python</i>}
                  />
              <ListItem
                  value={6}
                  primaryText="A Logparser that sends events to the redis queue"
                  leftIcon={<i className="icon-python">Python</i>}
                  />
              <ListItem
                  value={7}
                  primaryText="A Redis php management interface"
                  leftIcon={<i className="icon-redis">Pra</i>}
                  />
                <ListItem
                  value={8}
                  primaryText="Swagger REST Api Doc"
                  leftIcon={<i className="icon-css">Swagger</i>}
                  />
            </List>
</div>
<br />
<br />
<b className="dark-voice-tag">&#x3C;/Docker-Compose&#x3E;</b>       

</div>
        );
    }
}

export default FullStackComponent;



