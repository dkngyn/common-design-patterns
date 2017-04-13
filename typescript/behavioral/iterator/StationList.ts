import {Countable} from './Countable';
import {Iterator} from './Iterator';
import {RadioStation} from './RadioStation';

export class StationList implements Countable, Iterator {
  protected stations:Array<RadioStation>;
  protected counter:number;

  public constructor() {
    this.stations = [];
    this.counter = 0;
  }

  public addStation(station:RadioStation):void {
    this.stations.push(station);
  }

  public removeStation(toRemove:RadioStation):void {
    this.stations = this.stations.filter((station) => {
      return station.getFrequency() !== toRemove.getFrequency();
    });
  }

  public count():number {
    return this.stations.length;
  }

  public current():RadioStation {
    return this.stations[this.counter];
  }

  public key():number {
    return this.counter;
  }

  public next():number {
    return this.counter++;
  }

  public rewind():void {
    this.counter = 0;
  }

  public valid():boolean {
    return (this.stations[this.counter].constructor === RadioStation);
  }
}
