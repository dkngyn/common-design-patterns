import {AndroidBuilder} from './AndroidBuilder';
import {IOSBuilder} from './IOSBuilder';

let androidBuilder = new AndroidBuilder();
androidBuilder.build();

let iOSBuilder = new IOSBuilder();
iOSBuilder.build();
