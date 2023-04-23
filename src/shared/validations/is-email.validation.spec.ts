import { IsEmail } from './is-email.validation';

describe('IsEmail', () => {
  test('should return true for a valid email', () => {
    // Arrange
    const validEmail = 'test@example.com';
    const expected = true;

    // Act
    const result = IsEmail(validEmail);

    // Assert
    expect(result).toBe(expected);
  });

  test('should return false for an invalid email', () => {
    // Arrange
    const validEmail = 'testexample.com';
    const expected = false;

    // Act
    const result = IsEmail(validEmail);

    // Assert
    expect(result).toBe(expected);
  });
});
