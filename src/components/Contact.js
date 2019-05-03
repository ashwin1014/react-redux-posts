import React from 'react';

const Contact = (props) => {
    // console.log(props)

    const backHome = () => {
      props.history.push('/')
    };
    

    return(
        <div className="container">
            <h4 className="center">Contact Page</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nesciunt, a quidem nam neque iure magnam voluptatum libero. Omnis commodi et qui neque facilis veniam quae hic consequatur, molestiae similique.</p>
            <button className="btn" onClick={backHome}>Back Home</button>
        </div>
    )
}

export default Contact