import { IEmailValidator } from '@/validation/protocols/email-validator'
import validator from 'validator'

export class ValidatorAdapter implements IEmailValidator {
  isValidEmail (email: string): boolean {
    return validator.isEmail(email)
  }
}
