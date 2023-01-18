import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: Category;
  engineCapacity: number;
}

export type Category = 'Street' | 'Custom' | 'Trail';

export default IMotorcycle;