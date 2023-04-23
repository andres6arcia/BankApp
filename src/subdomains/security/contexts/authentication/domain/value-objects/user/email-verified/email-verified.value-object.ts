import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty } from 'src/shared/validations';

export class EmailVerifiedValueObject extends ValueObjectBase<boolean> {
  validateData(): void {
    this.validateIsEmpty();
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'emailVerified',
        message: 'La "verificacion del email" no puede estar vacía',
      } as IErrorValueObject);
    }
  }
}