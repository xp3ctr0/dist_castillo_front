import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'states'
})
export class StatesPipe implements PipeTransform {

  transform(value: number): String {
    return value === 1 ? 'Activo' : value === 0 ? 'Inactivo' : '';
  }
}
