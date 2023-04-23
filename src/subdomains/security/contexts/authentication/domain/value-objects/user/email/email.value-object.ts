import { IErrorValueObject, ValueObjectBase } from "src/shared/sofka";
import { IsEmail, IsEmpty } from "src/shared/validations";

export class EmailValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateIsEmpty();
    this.validateStructure();
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'email',
        message: 'El "email" no puede estar vacío',
      } as IErrorValueObject);
    }
  }

  private validateStructure(): void {
    if (this.value && IsEmail(this.value) === false) {
      this.setError({
        field: 'email',
        message: 'El "email" no tiene un formato válido',
      } as IErrorValueObject);
    }
  }
}
