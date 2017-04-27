import {BubbleSortStrategy} from './BubbleSortStrategy';
import {QuickSortStrategy} from './QuickSortStrategy';
import {Sorter} from './Sorter';

let dataset = [1,2,5,4,3,6];

let sorter = new Sorter(new BubbleSortStrategy());
sorter.sort(dataset);

sorter = new Sorter(new QuickSortStrategy());
sorter.sort(dataset);
