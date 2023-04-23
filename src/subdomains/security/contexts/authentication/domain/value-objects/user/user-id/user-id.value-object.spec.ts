jest.mock('@validations');

import * as validations from '@validations';
import {
  v4 as uuidv4,
  validate as uuidValidate,
  version as uuidVersion,
} from 'uuid';
import { UserIdValueObject } from './user-id.value-object';

describe('UserIdValueObject', () => {
  let objectValue: UserIdValueObject;

  beforeEach(() => {
    // Arrange and Act
    objectValue = new UserIdValueObject();
  });

  it('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  describe('Validate the UUIDv4', () => {
    it('should be define a correct UUIDv4', () => {
      // Arrange
      const expected =
        /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/;

      // Act
      const result = objectValue.valueOf();

      // Assert
      expect(result).toMatch(expected);
      expect(true).toBe(uuidValidate(result) && uuidVersion(result) === 4);
    });
  });

  describe('Validations', () => {
    it('should give an invalid UUIDv4 format error', () => {
      // Arrange
      const id = '1234567890';
      const hasExpectedErrors = true;
      const expectedNumberErrors = 1;
      const expectedMessage = 'El "usuarioId" no tiene un formato válido';
      jest.spyOn(validations, 'IsUUID4').mockReturnValue(false);

      // Act
      objectValue = new UserIdValueObject(id);

      // Assert
      expect(validations.IsUUID4).toHaveBeenCalledWith(id);
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(expectedNumberErrors);
      expect(objectValue.getErrors()[0]?.message).toEqual(expectedMessage);
    });

    it('should be valid UUIDv4 format', () => {
      // Arrange
      const id = uuidv4();
      const hasExpectedErrors = false;
      const expectedNumberErrors = 0;
      const expectedLength = 36;
      jest.spyOn(validations, 'IsUUID4').mockReturnValue(true);

      // Act
      objectValue = new UserIdValueObject(id);
      const result = objectValue.valueOf();

      // Assert
      expect(result).toHaveLength(expectedLength);
      expect(validations.IsUUID4).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toEqual(expectedNumberErrors);
    });
  });
});
