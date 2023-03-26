import React from 'react';
import DeviceDetails from '../Device-details/DeviceDetails';

const Device = (props) => {
    console.log(props);
    return (
        <div>
            <h3>I have device:{props.name}</h3>
            {/* <p>Price:{props.price}</p> */}
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;