import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, status: string, search: string): any {
    function filterItemsByStatus(items, status) {
      if (items.length < 1) return items;
      if (status === 'all') {
        return items;
      } else if (status === 'active') {
        return items.filter((item) => (!item.done));
      } else if (status === 'done') {
        return items.filter((item) => item.done);
      }
    }
    function filterItemsBySearch(items, search) {
      if (search.length === 0 || items.length < 1) return items;
      return items.filter((item) => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }
    return filterItemsBySearch(filterItemsByStatus(value, status), search)
  }

}
