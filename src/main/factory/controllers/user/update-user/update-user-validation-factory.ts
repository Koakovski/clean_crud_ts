import { CpfCnpjValidatorAdapter } from '@/infra/validators/cpf-cnpj-validator-adapter'
import { ValidatorAdapter } from '@/infra/validators/validator-adapter'
import { IValidation } from '@/presentation/protocols'
import { CpfValidation } from '@/validation/validators/cpf-validation'
import { EmailValidation } from '@/validation/validators/email-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeUpdateUserValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new EmailValidation('email', new ValidatorAdapter()))
  validations.push(new CpfValidation('cpf', new CpfCnpjValidatorAdapter()))

  return new ValidationComposite(validations)
}
