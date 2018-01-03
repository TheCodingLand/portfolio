import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.png" size={150}/>
            <p className="introduction-text">
              Loves Python, Javascript, System administration. <br />
              Detail-oriented, hardworking dreamer.<br />
              Professional Cake-Eater. Defender of peace.<br />
              <br />
              IT Consultant, currently living near Metz, France.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
