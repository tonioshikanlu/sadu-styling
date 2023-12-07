import React from 'react';

// Card component
class Card extends React.Component {
    render() {
        const { title, image, description } = this.props;
        return (
            <div className="card">
                <img src={image} alt={title} className="card-image" />
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button className="card-button">Email</button>
            </div>
        );
    }
}

// Services component
class Services extends React.Component {
    render() {
        return (
            <div className="services">
                <h2>Services</h2>
                <div className="card-container">
                    <Card
                        title="Package 1"
                        image="path/to/image1.jpg"
                        description="Description of Package 1"
                    />
                    <Card
                        title="Package 2"
                        image="path/to/image2.jpg"
                        description="Description of Package 2"
                    />
                    <Card
                        title="Package 3"
                        image="path/to/image3.jpg"
                        description="Description of Package 3"
                    />
                </div>
            </div>
        );
    }
}

export default Services;
