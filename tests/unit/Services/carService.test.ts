import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import request from 'supertest';
import app from '../../../src/app';
import Car from '../../../src/Domains/Car';
import Connection from '../../../src/Models/Connection';
import CarsService from '../../../src/Services/CarsService';
import { clearDatabase, closeDatabase } from '../../../__tests__/utils/db';

const inputData = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const outputData = {
  id: '63c5f0285f3ba1c06a48d865',
  model: 'Marea',
  color: 'Black',
  year: 2002,
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
};

describe('Teste da camada service de car', function () {
  it('Deve criar um carro', async function () {
    const carOutput = new Car(outputData);
    Sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarsService();
    const car = await carService.create(inputData);

    expect(car).to.be.deep.equal(carOutput);
  });

  it('Será validado que é possível cadastrar um carro com sucesso', async function () {
    await Connection();
    await clearDatabase();

    const { body, statusCode } = await request(app).post('/cars').send(inputData);
    expect(statusCode).equal(201);
    expect(body).haveOwnProperty('id');
    expect(body).haveOwnProperty('model');
    expect(body).haveOwnProperty('year');
    expect(body).haveOwnProperty('color');
    expect(body).haveOwnProperty('status');
    expect(body.status).equal(true);
    expect(body).haveOwnProperty('buyValue');
    expect(body).haveOwnProperty('doorsQty');
    expect(body).haveOwnProperty('seatsQty');

    await closeDatabase();
  });
});