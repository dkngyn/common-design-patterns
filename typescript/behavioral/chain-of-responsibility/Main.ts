import {Bank} from './Bank';
import {Paypal} from './Paypal';
import {Bitcoin} from './Bitcoin';

let bank = new Bank(100);
let paypal = new Paypal(200);
let bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(359);
