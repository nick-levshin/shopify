import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Phone' },
      { id: 2, name: 'Fridge' },
      { id: 3, name: 'TV' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: '12 pro',
        price: 100000,
        rating: 0,
        img: 'd56c8e98-9bd5-40e3-a50d-3be2956c61c3.jpg',
        typeId: 1,
        brandId: 2,
      },
      {
        id: 2,
        name: 'a52',
        price: 100000,
        rating: 0,
        img: '72ea8115-1be6-49e2-b8f9-062ccf66e58a.jpg',
        typeId: 1,
        brandId: 1,
      },
      {
        id: 3,
        name: 'Atlant',
        price: 100000,
        rating: 0,
        img: '7c044ed8-9ad6-48e3-bf55-8b9f2925cba8.jpg',
        typeId: 2,
        brandId: 2,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
