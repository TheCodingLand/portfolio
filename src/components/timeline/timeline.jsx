import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
               
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                      <CardHeader title="Platoon Leader" subtitle="Army" actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          French Army
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>Leadership</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Stress Management</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Organization</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                
                <div className="timeline-entry">
                    <Card expanded1={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Helpdesk Agent, System Administrator, System Architect" subtitle="For The register of commerce in Luxembourg"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            CTG 2009 - 2018 : CTG PSF SA
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Windows</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Linux</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Python</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Jira</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Powershell</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SQL SCCM Exchange...</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Networking</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
            </div>
        );
    }
}

export default TimelineComponent;
