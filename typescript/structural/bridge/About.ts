import {WebPage} from './WebPage';
import {Theme} from './Theme';

export class About implements WebPage {
  protected theme:Theme;

  public constructor(theme:Theme) {
    this.theme = theme;
  }

  public getContent():string {
    return `About page in ${this.theme.getColor()}`;
  }
}
