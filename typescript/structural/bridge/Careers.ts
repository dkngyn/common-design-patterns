import {WebPage} from './WebPage';
import {Theme} from './Theme';

export class Careers implements WebPage {
  protected theme:Theme;

  public constructor(theme:Theme) {
    this.theme = theme;
  }

  public getContent():string {
    return `Careers page in ${this.theme.getColor()}`;
  }
}
