import {RadioStation} from './RadioStation';
import {StationList} from './StationList';

let stationList = new StationList();

stationList.addStation(new RadioStation(94.5));
stationList.addStation(new RadioStation(93.5));
stationList.addStation(new RadioStation(103.5));
stationList.addStation(new RadioStation(96.6));
stationList.addStation(new RadioStation(101.1));
stationList.addStation(new RadioStation(106.5));

console.log(stationList.count());
console.log(stationList.current());
console.log(stationList.key());
console.log(stationList.next());
console.log(stationList.valid());
