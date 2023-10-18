import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsStringOrNumberConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, args: ValidationArguments) {
    return typeof value === 'string' || typeof value === 'number';
  }

  defaultMessage(args: ValidationArguments) {
    return 'La propiedad $property debe ser una cadena de caracteres o un número';
  }
}

export function IsStringOrNumber(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsStringOrNumberConstraint,
    });
  };
}
