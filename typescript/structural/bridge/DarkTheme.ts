import {Theme} from './Theme';

export class DarkTheme implements Theme {
  public getColor():string {
    return `dark black`;
  }
}
