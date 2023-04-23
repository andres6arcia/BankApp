jest.mock('@validations');

import * as validations from '@validations';
import { createHash } from 'node:crypto';
import { PasswordValueObject } from './password.value-object';

describe('PasswordValueObject', () => {
  let objectValue: PasswordValueObject;

  beforeEach(() => {
    // Arrange and Act
    objectValue = new PasswordValueObject();
  });

  it('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  describe('Validate the password', () => {
    it('should define a password encrypted with SHA512', () => {
      // Arrange
      const password = '1234567890';
      objectValue = new PasswordValueObject(password);
      const expected = createHash('sha512').update(password).digest('hex');

      // Act
      const result = objectValue.valueOf();

      // Assert
      expect(result).toBe(expected);
      expect(result.length).toBe(128);
    });

    it('should define a password encrypted with SHA512 incorrectly', () => {
      // Arrange
      const password = '1234567890';
      objectValue = new PasswordValueObject(password);
      const expected = createHash('sha512')
        .update(password + '1')
        .digest('hex');

      // Act
      const result = objectValue.valueOf();

      // Assert
      expect(result).not.toBe(expected);
      expect(result.length).toBe(128);
    });
  });

  describe('Validations', () => {
    it('should get an empty password error', () => {
      // Arrange
      const password = undefined;
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const expectedMessage = 'El "password" no puede estar vacío';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(true);

      // Act
      objectValue = new PasswordValueObject(password);
      const result = objectValue.value;

      // Assert
      expect(result).toBeUndefined();
      expect(validations.IsEmpty).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
    });

    it('should have a malformed password error', () => {
      // Arrange
      const password = 'ContraseñaMala';
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const messageExpected =
        'El "password" no tiene el formato válido. (Mínimo 8 caracteres, ' +
        'al menos una letra mayúscula, una letra minúscula, un número y ' +
        'un carácter especial';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);
      jest.spyOn(validations, 'IsPassword').mockReturnValue(false);

      // Act
      objectValue = new PasswordValueObject(password);
      const result = objectValue.value;

      // Assert
      expect(result).toBe(password);
      expect(validations.IsEmpty).toHaveBeenCalled();
      expect(validations.IsPassword).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(messageExpected);
    });
  });
});
