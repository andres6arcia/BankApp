jest.mock('@validations');

import * as validations from '@validations';
import { NameValueObject } from './name.value-object';

describe('NameValueObject', () => {
  // Arrange
  let objectValue: NameValueObject;

  beforeEach(() => {
    // Act
    objectValue = new NameValueObject();
  });

  it('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  describe('Validate the value', () => {
    it('should be valid', () => {
      // Arrange
      const name = 'Julian Andres';
      const expected = 'Julian Andres';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);

      // Act
      objectValue = new NameValueObject(name);
      const result = objectValue.valueOf();

      // Assert
      expect(result).toBe(expected);
      expect(objectValue.hasErrors()).toBe(false);
      expect(objectValue.getErrors().length).toBe(0);
      expect(objectValue.getErrors()[0]?.message).toBeUndefined();
      expect(validations.IsEmpty).toHaveBeenCalled();
    });
  });

  describe('Validations', () => {
    it('should be empty', () => {
      // Arrange
      const name = undefined;
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const expectedMessage = 'El "name" no puede estar vacío';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(true);

      // Act
      objectValue = new NameValueObject(name);
      const result = objectValue.valueOf();

      // Assert
      expect(result).toBeUndefined();
      expect(validations.IsEmpty).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
    });

    it('should be less than 100 characters', () => {
      // Arrange
      const name = 'Julian Andres';
      const hasExpectedErrors = false;
      const numberErrorsExpected = 0;
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);
      jest.spyOn(validations, 'StringMaxLength').mockReturnValue(false);

      // Act
      objectValue = new NameValueObject(name);

      // Assert
      expect(validations.StringMaxLength).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
    });

    it('should be greater than 100 characters', () => {
      // Arrange
      const name =
        'Quis labore reprehenderit consequat exercitation anim aliqua. Occaecat labore ex enim nisi proident tempor.';
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const expectedMessage =
        'El "name" no puede tener más de 100 caracteres';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);
      jest.spyOn(validations, 'StringMaxLength').mockReturnValue(true);

      // Act
      objectValue = new NameValueObject(name);

      // Assert
      expect(validations.StringMaxLength).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
    });
  });
});
