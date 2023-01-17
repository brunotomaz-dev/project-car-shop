import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/CarsService';
import { inputCarData, outputCarData } from '../mocks/carsMock';

describe('Teste da camada service de car', function () {
  it('Deve criar um carro em Service', async function () {
    const carOutput = new Car(outputCarData);
    Sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarsService();
    const car = await carService.create(inputCarData);

    expect(car).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});