import {Theme} from './Theme';

export interface WebPage {
  // constructor(theme:Theme);
  getContent():string;
}
