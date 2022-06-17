import React from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="d-flex flex-wrap">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});

export default DeviceList;
