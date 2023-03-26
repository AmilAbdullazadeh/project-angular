import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tl"
})
export class TlPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return "₺" + value + " mevcut para...";
  }
}
