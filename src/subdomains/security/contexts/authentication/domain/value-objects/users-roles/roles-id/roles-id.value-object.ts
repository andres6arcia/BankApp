import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsUUID4 } from 'src/shared/validations';
import { v4 as uuid } from 'uuid';

export class RolesIdValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value ? value : uuid());
  }

  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (this.value && IsUUID4(this.value) === false) {
      this.setError({
        field: 'rolesId',
        message: 'El "rolesId" no tiene un formato válido',
      } as IErrorValueObject);
    }
  }
}
