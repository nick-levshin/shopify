import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((types) => device.setTypes(types));
    fetchBrands().then((brands) => device.setBrands(brands));
    fetchDevices(null, null, 1, 3).then((devices) => {
      device.setDevices(devices.rows);
      device.setTotalCount(devices.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id || null,
      device.selectedBrand.id || null,
      device.page,
      device.limit
    ).then((devices) => {
      device.setDevices(devices.rows);
      device.setTotalCount(devices.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
