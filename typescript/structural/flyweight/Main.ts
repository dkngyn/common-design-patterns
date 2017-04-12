import {TeaMaker} from './TeaMaker';
import {TeaShop} from './TeaShop';

let teaMaker = new TeaMaker();
let shop = new TeaShop(teaMaker);

shop.takeOrder('less suger',1);
shop.takeOrder('more milk', 2);
shop.takeOrder('without sugar', 5);

shop.serve();
