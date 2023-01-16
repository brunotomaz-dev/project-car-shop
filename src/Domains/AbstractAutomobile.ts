import IAutomobile from '../Interfaces/IAutomobile';

abstract class AbstractAutomobile {
  protected id: string | undefined;
  protected model: string;
  protected color: string;
  protected year: number;
  protected buyValue: number;
  protected status: boolean;

  constructor(automobile: IAutomobile) {
    this.id = automobile.id;
    this.model = automobile.model;
    this.color = automobile.color;
    this.year = automobile.year;
    this.buyValue = automobile.buyValue;
    this.status = automobile.status || false;
  }
}

export default AbstractAutomobile;