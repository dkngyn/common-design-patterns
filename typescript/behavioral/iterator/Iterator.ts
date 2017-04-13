export interface Iterator {
  current():any;
  key():number;
  next():void;
  rewind():void;
  valid():boolean;
}
