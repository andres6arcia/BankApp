import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty, StringMaxLength } from 'src/shared/validations';

export class NameValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateIsEmpty();
    this.validateLength();
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'nombre',
        message: 'El "nombre" no puede estar vacío',
      } as IErrorValueObject);
    }
  }

  private validateLength(): void {
    if (this.value && StringMaxLength(this.value, 100) === true) {
      this.setError({
        field: 'nombre',
        message: 'El "nombre" no puede tener más de 100 caracteres',
      } as IErrorValueObject);
    }
  }
}
