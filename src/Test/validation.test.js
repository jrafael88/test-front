import "@testing-library/jest-dom/extend-expect";
import paymentValidation from "../Helpers/paymentValidation";

describe("Payment form validation", () => {
  test("Test that all data is true", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "João Rafael",
      validate: "03/2021",
      cvv: "645",
    });

    expect(payment).toEqual({});
  });

  test("Test if the credit card is false", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448",
      name: "João Rafael",
      validate: "03/2021",
      cvv: "645",
    });

    expect(payment).toEqual({card: "Número do cartão inválido"});
  });

  test("Test if the name is empty", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "",
      validate: "03/2021",
      cvv: "645",
    });
    expect(payment).toEqual({ name: "Preencha o titular" });
  });

  test("Test if the name has no number", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "5263",
      validate: "03/2021",
      cvv: "645",
    });
    expect(payment).toEqual({ name: "Titular inválido" });
  });

  test("Test if date has month and year", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "João Rafael",
      validate: "01/202",
      cvv: "645",
    });

    expect(payment).toEqual({ validate: "Data de validade inválida" });
  });

  test("test if date is greater than current date", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "João Rafael",
      validate: "01/2020",
      cvv: "645",
    });

    expect(payment).toEqual({ validate: "Data de validade inválida" });
  });

  test("Test if the cvv is false", async () => {
    const payment = paymentValidation({
      card: "5263.9223.8448.5286",
      name: "João Rafael",
      validate: "03/2021",
      cvv: "64",
    });

    expect(payment).toEqual({ cvv: "CVV inválido" });
  });
});
