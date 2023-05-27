export default function isValidCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/\D/g, '');

  if (cnpj.length !== 14) return false;

  if (/^(\d)\1+$/.test(cnpj)) return false;

  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight--;
    if (weight < 2) {
      weight = 9;
    }
  }
  let digit = 11 - (sum % 11);
  const firstDigit = (digit >= 10) ? 0 : digit;

  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i)) * weight;
    weight--;
    if (weight < 2) {
      weight = 9;
    }
 }
 digit = 11 - (sum % 11);
 const secondDigit = (digit >= 10) ? 0 : digit;

 if (
   parseInt(cnpj.charAt(12)) !== firstDigit ||
   parseInt(cnpj.charAt(13)) !== secondDigit
 )  return false;

 return cnpj
}
