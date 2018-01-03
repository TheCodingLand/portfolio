import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">User Experience and Design</p>
            <div style={{display: 'flex', justifyContent: 'center' }}>
            <p className="text-justify" style = {{ width:"50%"}}>
              I'm training myself to become a better designer.
              
              I've build this tool to enhance the workflow of my co-workers.
              it's integrated into a phone central system,
              and automatically fetches names and addresses from an external website.
              This is very much a W-I-P.
              </p>
            </div>
              <p><img src="callmanager.gif" style = {{width:"80%"}}/></p>
              <div style={{display: 'flex', justifyContent: 'center' }}>
              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="Tech"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Web"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Code"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Docker"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{"fill":"#A80202"}}
              label="React"
            />
        </div>
</div>
          </div>
        );
    }
}

export default DesignComponent;
