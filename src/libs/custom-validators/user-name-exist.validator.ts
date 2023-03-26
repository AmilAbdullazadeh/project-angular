import { FormControl } from "@angular/forms";
import { timer } from "rxjs";
import { switchMap, map } from "rxjs/operators";

export const UserNameExistValidator = (
  userService: any,
  time: number = 500
) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => userService.isExistName(input.value)),
      map(res => {
        return !res ? null : { userNameExist: true };
      })
    );
  };
};
