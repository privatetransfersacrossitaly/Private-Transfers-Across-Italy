import type { Locale } from "@/lib/site";

/**
 * Every country the phone selector offers, with its calling code.
 *
 * ── Why a generated table rather than the library at runtime ──────────────
 * `libphonenumber-js` knows the calling codes but not what a country is
 * called in Italian, and `Intl.DisplayNames` knows the names but not the
 * codes. This table is the join of the two, produced once from
 * `getCountries()` + `getCountryCallingCode()` + `Intl.DisplayNames` and
 * committed, so the dropdown costs the browser a plain array instead of a
 * metadata bundle and an ICU lookup on every render.
 *
 * ── Why the selector picks a country and not a calling code ───────────────
 * A calling code is not unique. +1 covers the United States, Canada and
 * twenty Caribbean territories; +44 covers the United Kingdom, Jersey,
 * Guernsey and the Isle of Man; +7 covers Russia and Kazakhstan. The
 * validation library needs an ISO country to decide whether a national
 * number is valid, so asking for a bare calling code would make correct
 * validation impossible for a third of the world.
 *
 * So the control is a country selector that *shows* its calling code, and
 * the lead stores both: the ISO code it was chosen by, and the calling code
 * a human would dial.
 *
 * ── Ordering ──────────────────────────────────────────────────────────────
 * Alphabetical by English name, with a short priority list floated to the
 * top in each language. That list is the countries this site's visitors
 * actually arrive from; it is a convenience, not a claim about coverage.
 */
export type PhoneCountry = {
  /** ISO 3166-1 alpha-2. What the validator needs. */
  iso: string;
  /** Calling code with its plus, e.g. "+39". What a person dials. */
  code: string;
  en: string;
  it: string;
};

/** Floated to the top of the list. Everything else follows alphabetically. */
const priority = [
  "IT", "GB", "US", "DE", "FR", "ES", "CH", "AT", "NL", "BE", "IE", "CA", "AU",
];

export const phoneCountries: PhoneCountry[] = [
  { iso: "AF", code: "+93", en: "Afghanistan", it: "Afghanistan" },
  { iso: "AX", code: "+358", en: "Åland Islands", it: "Isole Åland" },
  { iso: "AL", code: "+355", en: "Albania", it: "Albania" },
  { iso: "DZ", code: "+213", en: "Algeria", it: "Algeria" },
  { iso: "AS", code: "+1", en: "American Samoa", it: "Samoa Americane" },
  { iso: "AD", code: "+376", en: "Andorra", it: "Andorra" },
  { iso: "AO", code: "+244", en: "Angola", it: "Angola" },
  { iso: "AI", code: "+1", en: "Anguilla", it: "Anguilla" },
  { iso: "AG", code: "+1", en: "Antigua & Barbuda", it: "Antigua e Barbuda" },
  { iso: "AR", code: "+54", en: "Argentina", it: "Argentina" },
  { iso: "AM", code: "+374", en: "Armenia", it: "Armenia" },
  { iso: "AW", code: "+297", en: "Aruba", it: "Aruba" },
  { iso: "AC", code: "+247", en: "Ascension Island", it: "Isola Ascensione" },
  { iso: "AU", code: "+61", en: "Australia", it: "Australia" },
  { iso: "AT", code: "+43", en: "Austria", it: "Austria" },
  { iso: "AZ", code: "+994", en: "Azerbaijan", it: "Azerbaigian" },
  { iso: "BS", code: "+1", en: "Bahamas", it: "Bahamas" },
  { iso: "BH", code: "+973", en: "Bahrain", it: "Bahrein" },
  { iso: "BD", code: "+880", en: "Bangladesh", it: "Bangladesh" },
  { iso: "BB", code: "+1", en: "Barbados", it: "Barbados" },
  { iso: "BY", code: "+375", en: "Belarus", it: "Bielorussia" },
  { iso: "BE", code: "+32", en: "Belgium", it: "Belgio" },
  { iso: "BZ", code: "+501", en: "Belize", it: "Belize" },
  { iso: "BJ", code: "+229", en: "Benin", it: "Benin" },
  { iso: "BM", code: "+1", en: "Bermuda", it: "Bermuda" },
  { iso: "BT", code: "+975", en: "Bhutan", it: "Bhutan" },
  { iso: "BO", code: "+591", en: "Bolivia", it: "Bolivia" },
  { iso: "BA", code: "+387", en: "Bosnia & Herzegovina", it: "Bosnia ed Erzegovina" },
  { iso: "BW", code: "+267", en: "Botswana", it: "Botswana" },
  { iso: "BR", code: "+55", en: "Brazil", it: "Brasile" },
  { iso: "IO", code: "+246", en: "British Indian Ocean Territory", it: "Territorio Britannico dell’Oceano Indiano" },
  { iso: "VG", code: "+1", en: "British Virgin Islands", it: "Isole Vergini Britanniche" },
  { iso: "BN", code: "+673", en: "Brunei", it: "Brunei" },
  { iso: "BG", code: "+359", en: "Bulgaria", it: "Bulgaria" },
  { iso: "BF", code: "+226", en: "Burkina Faso", it: "Burkina Faso" },
  { iso: "BI", code: "+257", en: "Burundi", it: "Burundi" },
  { iso: "KH", code: "+855", en: "Cambodia", it: "Cambogia" },
  { iso: "CM", code: "+237", en: "Cameroon", it: "Camerun" },
  { iso: "CA", code: "+1", en: "Canada", it: "Canada" },
  { iso: "CV", code: "+238", en: "Cape Verde", it: "Capo Verde" },
  { iso: "BQ", code: "+599", en: "Caribbean Netherlands", it: "Caraibi Olandesi" },
  { iso: "KY", code: "+1", en: "Cayman Islands", it: "Isole Cayman" },
  { iso: "CF", code: "+236", en: "Central African Republic", it: "Repubblica Centrafricana" },
  { iso: "TD", code: "+235", en: "Chad", it: "Ciad" },
  { iso: "CL", code: "+56", en: "Chile", it: "Cile" },
  { iso: "CN", code: "+86", en: "China", it: "Cina" },
  { iso: "CX", code: "+61", en: "Christmas Island", it: "Isola Christmas" },
  { iso: "CC", code: "+61", en: "Cocos (Keeling) Islands", it: "Isole Cocos (Keeling)" },
  { iso: "CO", code: "+57", en: "Colombia", it: "Colombia" },
  { iso: "KM", code: "+269", en: "Comoros", it: "Comore" },
  { iso: "CG", code: "+242", en: "Congo - Brazzaville", it: "Congo-Brazzaville" },
  { iso: "CD", code: "+243", en: "Congo - Kinshasa", it: "Congo - Kinshasa" },
  { iso: "CK", code: "+682", en: "Cook Islands", it: "Isole Cook" },
  { iso: "CR", code: "+506", en: "Costa Rica", it: "Costa Rica" },
  { iso: "CI", code: "+225", en: "Côte d’Ivoire", it: "Costa d’Avorio" },
  { iso: "HR", code: "+385", en: "Croatia", it: "Croazia" },
  { iso: "CU", code: "+53", en: "Cuba", it: "Cuba" },
  { iso: "CW", code: "+599", en: "Curaçao", it: "Curaçao" },
  { iso: "CY", code: "+357", en: "Cyprus", it: "Cipro" },
  { iso: "CZ", code: "+420", en: "Czechia", it: "Cechia" },
  { iso: "DK", code: "+45", en: "Denmark", it: "Danimarca" },
  { iso: "DJ", code: "+253", en: "Djibouti", it: "Gibuti" },
  { iso: "DM", code: "+1", en: "Dominica", it: "Dominica" },
  { iso: "DO", code: "+1", en: "Dominican Republic", it: "Repubblica Dominicana" },
  { iso: "EC", code: "+593", en: "Ecuador", it: "Ecuador" },
  { iso: "EG", code: "+20", en: "Egypt", it: "Egitto" },
  { iso: "SV", code: "+503", en: "El Salvador", it: "El Salvador" },
  { iso: "GQ", code: "+240", en: "Equatorial Guinea", it: "Guinea Equatoriale" },
  { iso: "ER", code: "+291", en: "Eritrea", it: "Eritrea" },
  { iso: "EE", code: "+372", en: "Estonia", it: "Estonia" },
  { iso: "SZ", code: "+268", en: "Eswatini", it: "Eswatini" },
  { iso: "ET", code: "+251", en: "Ethiopia", it: "Etiopia" },
  { iso: "FK", code: "+500", en: "Falkland Islands", it: "Isole Falkland" },
  { iso: "FO", code: "+298", en: "Faroe Islands", it: "Isole Fær Øer" },
  { iso: "FJ", code: "+679", en: "Fiji", it: "Figi" },
  { iso: "FI", code: "+358", en: "Finland", it: "Finlandia" },
  { iso: "FR", code: "+33", en: "France", it: "Francia" },
  { iso: "GF", code: "+594", en: "French Guiana", it: "Guyana Francese" },
  { iso: "PF", code: "+689", en: "French Polynesia", it: "Polinesia Francese" },
  { iso: "GA", code: "+241", en: "Gabon", it: "Gabon" },
  { iso: "GM", code: "+220", en: "Gambia", it: "Gambia" },
  { iso: "GE", code: "+995", en: "Georgia", it: "Georgia" },
  { iso: "DE", code: "+49", en: "Germany", it: "Germania" },
  { iso: "GH", code: "+233", en: "Ghana", it: "Ghana" },
  { iso: "GI", code: "+350", en: "Gibraltar", it: "Gibilterra" },
  { iso: "GR", code: "+30", en: "Greece", it: "Grecia" },
  { iso: "GL", code: "+299", en: "Greenland", it: "Groenlandia" },
  { iso: "GD", code: "+1", en: "Grenada", it: "Grenada" },
  { iso: "GP", code: "+590", en: "Guadeloupe", it: "Guadalupa" },
  { iso: "GU", code: "+1", en: "Guam", it: "Guam" },
  { iso: "GT", code: "+502", en: "Guatemala", it: "Guatemala" },
  { iso: "GG", code: "+44", en: "Guernsey", it: "Guernsey" },
  { iso: "GN", code: "+224", en: "Guinea", it: "Guinea" },
  { iso: "GW", code: "+245", en: "Guinea-Bissau", it: "Guinea-Bissau" },
  { iso: "GY", code: "+592", en: "Guyana", it: "Guyana" },
  { iso: "HT", code: "+509", en: "Haiti", it: "Haiti" },
  { iso: "HN", code: "+504", en: "Honduras", it: "Honduras" },
  { iso: "HK", code: "+852", en: "Hong Kong SAR China", it: "RAS di Hong Kong" },
  { iso: "HU", code: "+36", en: "Hungary", it: "Ungheria" },
  { iso: "IS", code: "+354", en: "Iceland", it: "Islanda" },
  { iso: "IN", code: "+91", en: "India", it: "India" },
  { iso: "ID", code: "+62", en: "Indonesia", it: "Indonesia" },
  { iso: "IR", code: "+98", en: "Iran", it: "Iran" },
  { iso: "IQ", code: "+964", en: "Iraq", it: "Iraq" },
  { iso: "IE", code: "+353", en: "Ireland", it: "Irlanda" },
  { iso: "IM", code: "+44", en: "Isle of Man", it: "Isola di Man" },
  { iso: "IL", code: "+972", en: "Israel", it: "Israele" },
  { iso: "IT", code: "+39", en: "Italy", it: "Italia" },
  { iso: "JM", code: "+1", en: "Jamaica", it: "Giamaica" },
  { iso: "JP", code: "+81", en: "Japan", it: "Giappone" },
  { iso: "JE", code: "+44", en: "Jersey", it: "Jersey" },
  { iso: "JO", code: "+962", en: "Jordan", it: "Giordania" },
  { iso: "KZ", code: "+7", en: "Kazakhstan", it: "Kazakistan" },
  { iso: "KE", code: "+254", en: "Kenya", it: "Kenya" },
  { iso: "KI", code: "+686", en: "Kiribati", it: "Kiribati" },
  { iso: "XK", code: "+383", en: "Kosovo", it: "Kosovo" },
  { iso: "KW", code: "+965", en: "Kuwait", it: "Kuwait" },
  { iso: "KG", code: "+996", en: "Kyrgyzstan", it: "Kirghizistan" },
  { iso: "LA", code: "+856", en: "Laos", it: "Laos" },
  { iso: "LV", code: "+371", en: "Latvia", it: "Lettonia" },
  { iso: "LB", code: "+961", en: "Lebanon", it: "Libano" },
  { iso: "LS", code: "+266", en: "Lesotho", it: "Lesotho" },
  { iso: "LR", code: "+231", en: "Liberia", it: "Liberia" },
  { iso: "LY", code: "+218", en: "Libya", it: "Libia" },
  { iso: "LI", code: "+423", en: "Liechtenstein", it: "Liechtenstein" },
  { iso: "LT", code: "+370", en: "Lithuania", it: "Lituania" },
  { iso: "LU", code: "+352", en: "Luxembourg", it: "Lussemburgo" },
  { iso: "MO", code: "+853", en: "Macao SAR China", it: "RAS di Macao" },
  { iso: "MG", code: "+261", en: "Madagascar", it: "Madagascar" },
  { iso: "MW", code: "+265", en: "Malawi", it: "Malawi" },
  { iso: "MY", code: "+60", en: "Malaysia", it: "Malaysia" },
  { iso: "MV", code: "+960", en: "Maldives", it: "Maldive" },
  { iso: "ML", code: "+223", en: "Mali", it: "Mali" },
  { iso: "MT", code: "+356", en: "Malta", it: "Malta" },
  { iso: "MH", code: "+692", en: "Marshall Islands", it: "Isole Marshall" },
  { iso: "MQ", code: "+596", en: "Martinique", it: "Martinica" },
  { iso: "MR", code: "+222", en: "Mauritania", it: "Mauritania" },
  { iso: "MU", code: "+230", en: "Mauritius", it: "Mauritius" },
  { iso: "YT", code: "+262", en: "Mayotte", it: "Mayotte" },
  { iso: "MX", code: "+52", en: "Mexico", it: "Messico" },
  { iso: "FM", code: "+691", en: "Micronesia", it: "Micronesia" },
  { iso: "MD", code: "+373", en: "Moldova", it: "Moldavia" },
  { iso: "MC", code: "+377", en: "Monaco", it: "Monaco" },
  { iso: "MN", code: "+976", en: "Mongolia", it: "Mongolia" },
  { iso: "ME", code: "+382", en: "Montenegro", it: "Montenegro" },
  { iso: "MS", code: "+1", en: "Montserrat", it: "Montserrat" },
  { iso: "MA", code: "+212", en: "Morocco", it: "Marocco" },
  { iso: "MZ", code: "+258", en: "Mozambique", it: "Mozambico" },
  { iso: "MM", code: "+95", en: "Myanmar (Burma)", it: "Myanmar (Birmania)" },
  { iso: "NA", code: "+264", en: "Namibia", it: "Namibia" },
  { iso: "NR", code: "+674", en: "Nauru", it: "Nauru" },
  { iso: "NP", code: "+977", en: "Nepal", it: "Nepal" },
  { iso: "NL", code: "+31", en: "Netherlands", it: "Paesi Bassi" },
  { iso: "NC", code: "+687", en: "New Caledonia", it: "Nuova Caledonia" },
  { iso: "NZ", code: "+64", en: "New Zealand", it: "Nuova Zelanda" },
  { iso: "NI", code: "+505", en: "Nicaragua", it: "Nicaragua" },
  { iso: "NE", code: "+227", en: "Niger", it: "Niger" },
  { iso: "NG", code: "+234", en: "Nigeria", it: "Nigeria" },
  { iso: "NU", code: "+683", en: "Niue", it: "Niue" },
  { iso: "NF", code: "+672", en: "Norfolk Island", it: "Isola Norfolk" },
  { iso: "KP", code: "+850", en: "North Korea", it: "Corea del Nord" },
  { iso: "MK", code: "+389", en: "North Macedonia", it: "Macedonia del Nord" },
  { iso: "MP", code: "+1", en: "Northern Mariana Islands", it: "Isole Marianne Settentrionali" },
  { iso: "NO", code: "+47", en: "Norway", it: "Norvegia" },
  { iso: "OM", code: "+968", en: "Oman", it: "Oman" },
  { iso: "PK", code: "+92", en: "Pakistan", it: "Pakistan" },
  { iso: "PW", code: "+680", en: "Palau", it: "Palau" },
  { iso: "PS", code: "+970", en: "Palestinian Territories", it: "Territori Palestinesi" },
  { iso: "PA", code: "+507", en: "Panama", it: "Panama" },
  { iso: "PG", code: "+675", en: "Papua New Guinea", it: "Papua Nuova Guinea" },
  { iso: "PY", code: "+595", en: "Paraguay", it: "Paraguay" },
  { iso: "PE", code: "+51", en: "Peru", it: "Perù" },
  { iso: "PH", code: "+63", en: "Philippines", it: "Filippine" },
  { iso: "PL", code: "+48", en: "Poland", it: "Polonia" },
  { iso: "PT", code: "+351", en: "Portugal", it: "Portogallo" },
  { iso: "PR", code: "+1", en: "Puerto Rico", it: "Portorico" },
  { iso: "QA", code: "+974", en: "Qatar", it: "Qatar" },
  { iso: "RE", code: "+262", en: "Réunion", it: "Riunione" },
  { iso: "RO", code: "+40", en: "Romania", it: "Romania" },
  { iso: "RU", code: "+7", en: "Russia", it: "Russia" },
  { iso: "RW", code: "+250", en: "Rwanda", it: "Ruanda" },
  { iso: "WS", code: "+685", en: "Samoa", it: "Samoa" },
  { iso: "SM", code: "+378", en: "San Marino", it: "San Marino" },
  { iso: "ST", code: "+239", en: "São Tomé & Príncipe", it: "São Tomé e Príncipe" },
  { iso: "SA", code: "+966", en: "Saudi Arabia", it: "Arabia Saudita" },
  { iso: "SN", code: "+221", en: "Senegal", it: "Senegal" },
  { iso: "RS", code: "+381", en: "Serbia", it: "Serbia" },
  { iso: "SC", code: "+248", en: "Seychelles", it: "Seychelles" },
  { iso: "SL", code: "+232", en: "Sierra Leone", it: "Sierra Leone" },
  { iso: "SG", code: "+65", en: "Singapore", it: "Singapore" },
  { iso: "SX", code: "+1", en: "Sint Maarten", it: "Sint Maarten" },
  { iso: "SK", code: "+421", en: "Slovakia", it: "Slovacchia" },
  { iso: "SI", code: "+386", en: "Slovenia", it: "Slovenia" },
  { iso: "SB", code: "+677", en: "Solomon Islands", it: "Isole Salomone" },
  { iso: "SO", code: "+252", en: "Somalia", it: "Somalia" },
  { iso: "ZA", code: "+27", en: "South Africa", it: "Sudafrica" },
  { iso: "KR", code: "+82", en: "South Korea", it: "Corea del Sud" },
  { iso: "SS", code: "+211", en: "South Sudan", it: "Sud Sudan" },
  { iso: "ES", code: "+34", en: "Spain", it: "Spagna" },
  { iso: "LK", code: "+94", en: "Sri Lanka", it: "Sri Lanka" },
  { iso: "BL", code: "+590", en: "St. Barthélemy", it: "Saint-Barthélemy" },
  { iso: "SH", code: "+290", en: "St. Helena", it: "Sant’Elena" },
  { iso: "KN", code: "+1", en: "St. Kitts & Nevis", it: "Saint Kitts e Nevis" },
  { iso: "LC", code: "+1", en: "St. Lucia", it: "Saint Lucia" },
  { iso: "MF", code: "+590", en: "St. Martin", it: "Saint Martin" },
  { iso: "PM", code: "+508", en: "St. Pierre & Miquelon", it: "Saint-Pierre e Miquelon" },
  { iso: "VC", code: "+1", en: "St. Vincent & Grenadines", it: "Saint Vincent e Grenadine" },
  { iso: "SD", code: "+249", en: "Sudan", it: "Sudan" },
  { iso: "SR", code: "+597", en: "Suriname", it: "Suriname" },
  { iso: "SJ", code: "+47", en: "Svalbard & Jan Mayen", it: "Svalbard e Jan Mayen" },
  { iso: "SE", code: "+46", en: "Sweden", it: "Svezia" },
  { iso: "CH", code: "+41", en: "Switzerland", it: "Svizzera" },
  { iso: "SY", code: "+963", en: "Syria", it: "Siria" },
  { iso: "TW", code: "+886", en: "Taiwan", it: "Taiwan" },
  { iso: "TJ", code: "+992", en: "Tajikistan", it: "Tagikistan" },
  { iso: "TZ", code: "+255", en: "Tanzania", it: "Tanzania" },
  { iso: "TH", code: "+66", en: "Thailand", it: "Thailandia" },
  { iso: "TL", code: "+670", en: "Timor-Leste", it: "Timor Est" },
  { iso: "TG", code: "+228", en: "Togo", it: "Togo" },
  { iso: "TK", code: "+690", en: "Tokelau", it: "Tokelau" },
  { iso: "TO", code: "+676", en: "Tonga", it: "Tonga" },
  { iso: "TT", code: "+1", en: "Trinidad & Tobago", it: "Trinidad e Tobago" },
  { iso: "TA", code: "+290", en: "Tristan da Cunha", it: "Tristan da Cunha" },
  { iso: "TN", code: "+216", en: "Tunisia", it: "Tunisia" },
  { iso: "TR", code: "+90", en: "Türkiye", it: "Turchia" },
  { iso: "TM", code: "+993", en: "Turkmenistan", it: "Turkmenistan" },
  { iso: "TC", code: "+1", en: "Turks & Caicos Islands", it: "Isole Turks e Caicos" },
  { iso: "TV", code: "+688", en: "Tuvalu", it: "Tuvalu" },
  { iso: "VI", code: "+1", en: "U.S. Virgin Islands", it: "Isole Vergini Americane" },
  { iso: "UG", code: "+256", en: "Uganda", it: "Uganda" },
  { iso: "UA", code: "+380", en: "Ukraine", it: "Ucraina" },
  { iso: "AE", code: "+971", en: "United Arab Emirates", it: "Emirati Arabi Uniti" },
  { iso: "GB", code: "+44", en: "United Kingdom", it: "Regno Unito" },
  { iso: "US", code: "+1", en: "United States", it: "Stati Uniti" },
  { iso: "UY", code: "+598", en: "Uruguay", it: "Uruguay" },
  { iso: "UZ", code: "+998", en: "Uzbekistan", it: "Uzbekistan" },
  { iso: "VU", code: "+678", en: "Vanuatu", it: "Vanuatu" },
  { iso: "VA", code: "+39", en: "Vatican City", it: "Città del Vaticano" },
  { iso: "VE", code: "+58", en: "Venezuela", it: "Venezuela" },
  { iso: "VN", code: "+84", en: "Vietnam", it: "Vietnam" },
  { iso: "WF", code: "+681", en: "Wallis & Futuna", it: "Wallis e Futuna" },
  { iso: "EH", code: "+212", en: "Western Sahara", it: "Sahara Occidentale" },
  { iso: "YE", code: "+967", en: "Yemen", it: "Yemen" },
  { iso: "ZM", code: "+260", en: "Zambia", it: "Zambia" },
  { iso: "ZW", code: "+263", en: "Zimbabwe", it: "Zimbabwe" },
];

const byIso = new Map(phoneCountries.map((c) => [c.iso, c]));

/** The country for an ISO code, or nothing if it is not one we offer. */
export function phoneCountryFor(iso: string): PhoneCountry | undefined {
  return byIso.get(iso.toUpperCase());
}

/**
 * The list as the selector should render it: the priority countries first,
 * then everything else alphabetically in the reader's own language.
 */
export function phoneCountryOptions(locale: Locale): PhoneCountry[] {
  const top = priority
    .map((iso) => byIso.get(iso))
    .filter((c): c is PhoneCountry => Boolean(c));
  const rest = phoneCountries
    .filter((c) => !priority.includes(c.iso))
    .sort((a, b) => a[locale].localeCompare(b[locale], locale));
  return [...top, ...rest];
}

/** "Italy +39" / "Italia +39", for the option label. */
export function phoneCountryLabel(country: PhoneCountry, locale: Locale): string {
  return `${country[locale]} ${country.code}`;
}
