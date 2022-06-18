import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Card, Button, Row } from 'react-bootstrap';
import rating from '../assets/rating.png';
import { fetchOneDevice } from '../http/deviceAPI';
import { useParams } from 'react-router-dom';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((device) => setDevice(device));
  }, []);

  return (
    <Container className="mt-3">
      <Row className="d-flex">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
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
        {device.info.map((info, index) => {
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
