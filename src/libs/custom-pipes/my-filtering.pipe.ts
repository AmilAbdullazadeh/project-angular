import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myFiltering"
})
export class MyFilteringPipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): unknown {
    let result: any[] = [];
    value.forEach(element => {
      const isExistLetter = element.includes(args[0].toString());
      if (isExistLetter) {
        result.push(element);
      }
    });

    return result;
  }
}
