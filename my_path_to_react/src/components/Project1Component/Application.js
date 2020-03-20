import React from 'react';

const toys = [
    {
        name: 'Toy One',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '1'
    },
    {
        name: 'Toy Two',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '2'
    },
    {
        name: 'Toy Three',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '3'
    },
    {
        name: 'Toy Four',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '4'
    },
    {
        name: 'Toy Five',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '5'
    },
    {
        name: 'Toy Six',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '6'
    },
    {
        name: 'Toy Seven',
        description: `Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        image: '7'
    },
    {
        name: 'Toy Eight',
        description: `Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been
 the industry's standard dummy text ever since the 1500s.`,
        image: '8'
    },
];


const Card = props =>
    <div className="col-md-6 col-lg-3">
        <div className="card mb-3">
            <img className="card-img-top" src={`img/${props.toy.image}.png`} />
            <div className="card-body">
                <h4 className="card-title text-center">{props.toy.name}</h4>
                <p className="card-text">
                    {props.toy.description}
                </p>
            </div>
        </div>
    </div>;

const Toys = props =>
    <>
        <h1 id="toys"
            className="display-4 my-4 text-center text-muted">Toys
        </h1>

        <Toys toys={this.props.toys} />

        <div className="row">
            {props.toys.map((toy, index) => <Card key={index} toy={toy} />)}
        </div>
    </>;


const Application = (props) => {
    return (
        <div>


            



        </div>
    );
}

export default Application;