import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, ...arg: clima[]): any {

    if (arg =='' || arg.length < 3) return value;
    const resultadoClima = [];

    for (let clima of value) {

      if (clima.cuidad.toLowerCase().indexOf(arg > 0) {
        resultadoClima.push(clima);

      }

    }
    return resultadoClima;
  }

}
