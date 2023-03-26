import React from 'react';
import Knob from '../knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple', margin:'20px'}}>
           
           <h2>This is dial component</h2>
           <p> Your steps count:{props.steps}</p>
       <Knob steps={props.steps}> </Knob>
        </div>
    );
};

export default Dial;