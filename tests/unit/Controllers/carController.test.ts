import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import request from 'supertest';
import app from '../../../src/app';
import Car from '../../../src/Domains/Car';
import { inputCarData, outputCarData } from '../mocks/carsMock';

describe('Teste da camada controller de car', function () {
  it('Deve criar um carro via controller', async function () {
    const carOutput = new Car(outputCarData);
    Sinon.stub(Model, 'create').resolves(carOutput);

    const response = await request(app).post('/cars').send(inputCarData);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});