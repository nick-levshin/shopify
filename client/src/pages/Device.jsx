import React from 'react';
import { Col, Container, Image, Card, Button, Row } from 'react-bootstrap';
import rating from '../assets/rating.png';

const DevicePage = () => {
  const device = {
    id: 3,
    name: 'Atlant',
    price: 100000,
    rating: 0,
    img: '7c044ed8-9ad6-48e3-bf55-8b9f2925cba8.jpg',
    typeId: 2,
    brandId: 2,
  };
  const description = [];
  return (
    <Container className="mt-3">
      <Row className="d-flex">
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${rating}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>From: {device.price}</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex dlex-column m-3">
        <h1>Specifications</h1>
        {description.map((info, index) => {
          <Row
            key={info.id}
            className="d-felx"
            style={{
              backgroundColor: index % 2 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>;
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
