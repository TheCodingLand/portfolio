import React, {Component} from 'react';
import Trend from 'react-trend';
import './trend.css';


class TrendComponent extends Component {

  // For simplicity, we're always passing a gradient, even when it's just 1
  // color. We'll handle that discrepancy here.
render () {
    return (

<div>
    <p style={{color:"#fff"}} className="headline"> I got really interested in coding again, 
    and the number of my lines of codes
    on github have started to skyrocket </p>
<Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[0,2,1,0,3,4,3,1,5,5,6,8,7,9,41]}
    gradient={['#00c6ff', '#F0F', '#FF0']}
    radius={10}
    strokeWidth={2}
    strokeLinecap={'butt'}
  />
  <p className="headline" style={{color:"#fff"}}>So I've decided to create a little portfolio with the tools I'm currently learning</p>
  <p className="headline" style={{color:"#fff"}}>react.js https://reactjs.org/</p>
  </div>
  
)

}
}

export default TrendComponent;