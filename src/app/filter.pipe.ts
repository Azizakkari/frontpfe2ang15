import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      // Ajoutez ici la logique de filtrage pour chaque élément de votre tableau
      // Par exemple, pour filtrer par nom de formulaire :
      return item.nomforms.toLowerCase().includes(searchText);
    });
  }
}
