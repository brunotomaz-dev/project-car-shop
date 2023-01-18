import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/CarsService';
import HttpException from '../../../src/utils/httpException';
import {
  arrayCarData,
  atualizarCarData,
  inputCarData,
  inputCarDataInvalid,
  outputCarData,
} from '../mocks/carsMock';

describe('Teste da camada service de car', function () {
  it('Deve criar um carro em Service', async function () {
    const carOutput = new Car(outputCarData);
    Sinon.stub(Model, 'create').resolves(carOutput);

    const carService = new CarsService();
    const car = await carService.create(inputCarData);

    expect(car).to.be.deep.equal(carOutput);
  });

  it('Deve retornar um carro pelo id', async function () {
    const carOutput = new Car(outputCarData);
    Sinon.stub(Model, 'findById')
      .withArgs(outputCarData.id)
      .resolves(carOutput);

    const carService = new CarsService();
    const car = await carService.find(outputCarData.id);

    expect(car).to.be.deep.equal(carOutput);
  });

  it('Deve retornar todos os carros', async function () {
    Sinon.stub(Model, 'find').resolves(arrayCarData);

    const carService = new CarsService();
    const car = await carService.findAll();

    expect(car).to.be.deep.equal(arrayCarData);
  });

  it('Deve atualizar um carro pelo id', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(atualizarCarData);

    const carService = new CarsService();
    const car = await carService.update(outputCarData.id, atualizarCarData);

    expect(car).to.be.deep.equal(atualizarCarData);
  });

  it('Deve lançar erro ao tentar atualizar um carro com id inválido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(false);

    try {
      const carService = new CarsService();
      await carService.update(inputCarDataInvalid.id, atualizarCarData);
    } catch (error) {
      expect((error as HttpException).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});
