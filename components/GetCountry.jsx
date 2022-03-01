export default function getCountry (iso2) {
  const countries = require("i18n-iso-countries")
  countries.registerLocale(require("i18n-iso-countries/langs/es.json"))
  return countries.getName(iso2, "es")
}
