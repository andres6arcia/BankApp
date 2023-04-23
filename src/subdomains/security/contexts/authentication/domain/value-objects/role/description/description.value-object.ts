import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty, StringMaxLength } from 'src/shared/validations';

export class DescriptionValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateIsEmpty();
    this.validateLength();
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'descripción',
        message: 'La "descripción" no puede estar vacía',
      } as IErrorValueObject);
    }
  }

  private validateLength(): void {
    if (this.value && StringMaxLength(this.value, 200) === true) {
      this.setError({
        field: 'descripción',
        message: 'La "descripción" no puede tener más de 200 caracteres',
      } as IErrorValueObject);
    }
  }
}
