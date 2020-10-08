export default function paymentValidation(values) {
  let errors = {};

  if (values.card.length < 19) {
    errors.card = "Número do cartão inválido";
  }

  if (values.name === "") {
    errors.name = "Preencha o titular";
  } else if (!/[A-Za-z]$/.test(values.name)) {
    errors.name = "Titular inválido";
  }

  if (values.validate.length < 5) {
    errors.validate = "Data de validade inválida";
  } else if (new Date(values.validate.slice(3), values.validate.slice(0, 2) - 1) < new Date()) {
    errors.validate = "Data de validade inválida";
  }

  if (values.cvv.length < 3) {
    errors.cvv = "CVV inválido";
  }

  return errors;
}
