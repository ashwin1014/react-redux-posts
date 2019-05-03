import React from 'react';
import Rainbow from '../HOC/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About Page</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nesciunt, a quidem nam neque iure magnam voluptatum libero. Omnis commodi et qui neque facilis veniam quae hic consequatur, molestiae similique.</p>
        </div>
    )
}

export default Rainbow(About);