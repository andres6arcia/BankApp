jest.mock('@validations');

import * as validations from '@validations';
import { EmailValueObject } from './email.value-object';

describe('EmailValueObject', () => {
  let objectValue: EmailValueObject;

  beforeEach(() => {
    // Arrange and Act
    objectValue = new EmailValueObject();
  });

  it('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  it('should be valid', () => {
    // Arrange
    const email = 'julian.lasso@sofka.com.co';
    const expected = 'julian.lasso@sofka.com.co';

    // Act
    objectValue = new EmailValueObject(email);
    const result = objectValue.valueOf();

    // Assert
    expect(result).toBe(expected);
  });

  it('should be invalid', () => {
    // Arrange
    const email = 'julian.lassosofka.com.co';
    const hasExpectedErrors = true;
    const numberErrorsExpected = 1;
    const expectedMessage = 'El "email" no tiene un formato válido';
    jest.spyOn(validations, 'IsEmail').mockReturnValue(false);

    // Act
    objectValue = new EmailValueObject(email);

    // Assert
    expect(validations.IsEmail).toHaveBeenCalled();
    expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
    expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
    expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
  });

  it('should be empty', () => {
    // Arrange
    const email = undefined;
    const hasExpectedErrors = true;
    const numberErrorsExpected = 1;
    const expectedMessage = 'El "email" no puede estar vacío';
    jest.spyOn(validations, 'IsEmpty').mockReturnValue(true);

    // Act
    objectValue = new EmailValueObject(email);
    const result = objectValue.valueOf();

    // Assert
    expect(result).toBeUndefined();
    expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
    expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
    expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
  });
});
