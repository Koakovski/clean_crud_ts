import { CpfCnpjValidatorAdapter } from '@/infra/validators/cpf-cnpj-validator-adapter'
import { ValidatorAdapter } from '@/infra/validators/validator-adapter'
import { IValidation } from '@/presentation/protocols'
import { CpfValidation } from '@/validation/validators/cpf-validation'
import { EmailValidation } from '@/validation/validators/email-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeCreateUserValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['name', 'email', 'cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }

  validations.push(new EmailValidation('email', new ValidatorAdapter()))
  validations.push(new CpfValidation('cpf', new CpfCnpjValidatorAdapter()))

  return new ValidationComposite(validations)
}
