import { useCreateSettingsCountryMutation } from '../../../store/query/settingsQuery'
import cls from './companyCountries.module.scss'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const CompanyCountries = () => {
  const [ createSettingsCountry ] = useCreateSettingsCountryMutation()
  const [showMenu, setShowMenu] = useState({
    showMenuOne: false,
    showMenuTwo: false,
  })
  const countryCodes = [{
    code: "AD",
    name: "ANDORRA",
  }, {
    code: "AE",
    name: "UNITED ARAB EMIRATES",
  }, {
    code: "AF",
    name: "AFGHANISTAN",
  }, {
    code: "AG",
    name: "ANTIGUA AND BARBUDA",
  }, {
    code: "AI",
    name: "ANGUILLA",
  }, {
    code: "AL",
    name: "ALBANIA",
  }, {
    code: "AM",
    name: "ARMENIA",
  },  {
    code: "AO",
    name: "ANGOLA",
  }, {
    code: "AQ",
    name: "ANTARCTICA",
  }, {
    code: "AR",
    name: "ARGENTINA",
  }, {
    code: "AS",
    name: "AMERICAN SAMOA",
  }, {
    code: "AT",
    name: "AUSTRIA",
  }, {
    code: "AU",
    name: "AUSTRALIA",
  }, {
    code: "AW",
    name: "ARUBA",
  }, {
    code: "AZ",
    name: "AZERBAIJAN",
  }, {
    code: "BA",
    name: "BOSNIA AND HERZEGOVINA",
  }, {
    code: "BB",
    name: "BARBADOS",
  }, {
    code: "BD",
    name: "BANGLADESH",
  }, {
    code: "BE",
    name: "BELGIUM",
  }, {
    code: "BF",
    name: "BURKINA FASO",
  }, {
    code: "BG",
    name: "BULGARIA",
  }, {
    code: "BH",
    name: "BAHRAIN",
  }, {
    code: "BI",
    name: "BURUNDI",
  }, {
    code: "BJ",
    name: "BENIN",
  }, {
    code: "BL",
    name: "SAINT BARTHELEMY",
  }, {
    code: "BM",
    name: "BERMUDA",
  }, {
    code: "BN",
    name: "BRUNEI DARUSSALAM",
  }, {
    code: "BO",
    name: "BOLIVIA",
  }, {
    code: "BR",
    name: "BRAZIL",
  }, {
    code: "BS",
    name: "BAHAMAS",
  }, {
    code: "BT",
    name: "BHUTAN",
  }, {
    code: "BW",
    name: "BOTSWANA",
  }, {
    code: "BY",
    name: "BELARUS",
  }, {
    code: "BZ",
    name: "BELIZE",
  }, {
    code: "CA",
    name: "CANADA",
  }, {
    code: "CC",
    name: "COCOS (KEELING) ISLANDS",
  }, {
    code: "CD",
    name: "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
  }, {
    code: "CF",
    name: "CENTRAL AFRICAN REPUBLIC",
  }, {
    code: "CG",
    name: "CONGO",
  }, {
    code: "CH",
    name: "SWITZERLAND",
  }, {
    code: "CI",
    name: "COTE D IVOIRE",
  }, {
    code: "CK",
    name: "COOK ISLANDS",
  }, {
    code: "CL",
    name: "CHILE",
  }, {
    code: "CM",
    name: "CAMEROON",
  }, {
    code: "CN",
    name: "CHINA",
  }, {
    code: "CO",
    name: "COLOMBIA",
  }, {
    code: "CR",
    name: "COSTA RICA",
  }, {
    code: "CU",
    name: "CUBA",
  }, {
    code: "CV",
    name: "CAPE VERDE",
  }, {
    code: "CX",
    name: "CHRISTMAS ISLAND",
  }, {
    code: "CY",
    name: "CYPRUS",
  }, {
    code: "CZ",
    name: "CZECH REPUBLIC",
  }, {
    code: "DE",
    name: "GERMANY",
  }, {
    code: "DJ",
    name: "DJIBOUTI",
  }, {
    code: "DK",
    name: "DENMARK",
  }, {
    code: "DM",
    name: "DOMINICA",
  }, {
    code: "DO",
    name: "DOMINICAN REPUBLIC",
  }, {
    code: "DZ",
    name: "ALGERIA",
  }, {
    code: "EC",
    name: "ECUADOR",
  }, {
    code: "EE",
    name: "ESTONIA",
  }, {
    code: "EG",
    name: "EGYPT",
  }, {
    code: "ER",
    name: "ERITREA",
  }, {
    code: "ES",
    name: "SPAIN",
  }, {
    code: "ET",
    name: "ETHIOPIA",
  }, {
    code: "FI",
    name: "FINLAND",
  }, {
    code: "FJ",
    name: "FIJI",
  }, {
    code: "FK",
    name: "FALKLAND ISLANDS (MALVINAS)",
  }, {
    code: "FM",
    name: "MICRONESIA, FEDERATED STATES OF",
  }, {
    code: "FO",
    name: "FAROE ISLANDS",
  }, {
    code: "FR",
    name: "FRANCE",
  }, {
    code: "GA",
    name: "GABON",
  }, {
    code: "GB",
    name: "UNITED KINGDOM",
  }, {
    code: "GD",
    name: "GRENADA",
  }, {
    code: "GE",
    name: "GEORGIA",
  }, {
    code: "GH",
    name: "GHANA",
  }, {
    code: "GI",
    name: "GIBRALTAR",
  }, {
    code: "GL",
    name: "GREENLAND",
  }, {
    code: "GM",
    name: "GAMBIA",
  }, {
    code: "GN",
    name: "GUINEA",
  }, {
    code: "GQ",
    name: "EQUATORIAL GUINEA",
  }, {
    code: "GR",
    name: "GREECE",
  }, {
    code: "GT",
    name: "GUATEMALA",
  }, {
    code: "GU",
    name: "GUAM",
  }, {
    code: "GW",
    name: "GUINEA-BISSAU",
  }, {
    code: "GY",
    name: "GUYANA",
  }, {
    code: "HK",
    name: "HONG KONG",
  }, {
    code: "HN",
    name: "HONDURAS",
  }, {
    code: "HR",
    name: "CROATIA",
  }, {
    code: "HT",
    name: "HAITI",
  }, {
    code: "HU",
    name: "HUNGARY",
  }, {
    code: "ID",
    name: "INDONESIA",
  }, {
    code: "IE",
    name: "IRELAND",
  }, {
    code: "IL",
    name: "ISRAEL",
  }, {
    code: "IM",
    name: "ISLE OF MAN",
  }, {
    code: "IN",
    name: "INDIA",
  }, {
    code: "IQ",
    name: "IRAQ",
  }, {
    code: "IR",
    name: "IRAN, ISLAMIC REPUBLIC OF",
  }, {
    code: "IS",
    name: "ICELAND",
  }, {
    code: "IT",
    name: "ITALY",
  }, {
    code: "JM",
    name: "JAMAICA",
  }, {
    code: "JO",
    name: "JORDAN",
  }, {
    code: "JP",
    name: "JAPAN",
  }, {
    code: "KE",
    name: "KENYA",
  }, {
    code: "KG",
    name: "KYRGYZSTAN",
  }, {
    code: "KH",
    name: "CAMBODIA",
  }, {
    code: "KI",
    name: "KIRIBATI",
  }, {
    code: "KM",
    name: "COMOROS",
  }, {
    code: "KN",
    name: "SAINT KITTS AND NEVIS",
  }, {
    code: "KP",
    name: "KOREA DEMOCRATIC PEOPLES REPUBLIC OF",
  }, {
    code: "KR",
    name: "KOREA REPUBLIC OF",
  }, {
    code: "KW",
    name: "KUWAIT",
  }, {
    code: "KY",
    name: "CAYMAN ISLANDS",
  }, {
    code: "KZ",
    name: "KAZAKSTAN",
  }, {
    code: "LA",
    name: "LAO PEOPLES DEMOCRATIC REPUBLIC",
  }, {
    code: "LB",
    name: "LEBANON",
  }, {
    code: "LC",
    name: "SAINT LUCIA",
  }, {
    code: "LI",
    name: "LIECHTENSTEIN",
  }, {
    code: "LK",
    name: "SRI LANKA",
  }, {
    code: "LR",
    name: "LIBERIA",
  }, {
    code: "LS",
    name: "LESOTHO",
  }, {
    code: "LT",
    name: "LITHUANIA",
  }, {
    code: "LU",
    name: "LUXEMBOURG",
  }, {
    code: "LV",
    name: "LATVIA",
  }, {
    code: "LY",
    name: "LIBYAN ARAB JAMAHIRIYA",
  }, {
    code: "MA",
    name: "MOROCCO",
  }, {
    code: "MC",
    name: "MONACO",
  }, {
    code: "MD",
    name: "MOLDOVA, REPUBLIC OF",
  }, {
    code: "ME",
    name: "MONTENEGRO",
  }, {
    code: "MF",
    name: "SAINT MARTIN",
  }, {
    code: "MG",
    name: "MADAGASCAR",
  }, {
    code: "MH",
    name: "MARSHALL ISLANDS",
  }, {
    code: "MK",
    name: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
  }, {
    code: "ML",
    name: "MALI",
  }, {
    code: "MM",
    name: "MYANMAR",
  }, {
    code: "MN",
    name: "MONGOLIA",
  }, {
    code: "MO",
    name: "MACAU",
  }, {
    code: "MP",
    name: "NORTHERN MARIANA ISLANDS",
  }, {
    code: "MR",
    name: "MAURITANIA",
  }, {
    code: "MS",
    name: "MONTSERRAT",
  }, {
    code: "MT",
    name: "MALTA",
  }, {
    code: "MU",
    name: "MAURITIUS",
  }, {
    code: "MV",
    name: "MALDIVES",
  }, {
    code: "MW",
    name: "MALAWI",
  }, {
    code: "MX",
    name: "MEXICO",
  }, {
    code: "MY",
    name: "MALAYSIA",
  }, {
    code: "MZ",
    name: "MOZAMBIQUE",
  }, {
    code: "NA",
    name: "NAMIBIA",
  }, {
    code: "NC",
    name: "NEW CALEDONIA",
  }, {
    code: "NE",
    name: "NIGER",
  }, {
    code: "NG",
    name: "NIGERIA",
  }, {
    code: "NI",
    name: "NICARAGUA",
  }, {
    code: "NL",
    name: "NETHERLANDS",
  }, {
    code: "NO",
    name: "NORWAY",
  }, {
    code: "NP",
    name: "NEPAL",
  }, {
    code: "NR",
    name: "NAURU",
  }, {
    code: "NU",
    name: "NIUE",
  }, {
    code: "NZ",
    name: "NEW ZEALAND",
  }, {
    code: "OM",
    name: "OMAN",
  }, {
    code: "PA",
    name: "PANAMA",
  }, {
    code: "PE",
    name: "PERU",
  }, {
    code: "PF",
    name: "FRENCH POLYNESIA",
  }, {
    code: "PG",
    name: "PAPUA NEW GUINEA",
  }, {
    code: "PH",
    name: "PHILIPPINES",
  }, {
    code: "PK",
    name: "PAKISTAN",
  }, {
    code: "PL",
    name: "POLAND",
  }, {
    code: "PM",
    name: "SAINT PIERRE AND MIQUELON",
  }, {
    code: "PN",
    name: "PITCAIRN",
  }, {
    code: "PR",
    name: "PUERTO RICO",
  }, {
    code: "PT",
    name: "PORTUGAL",
  }, {
    code: "PW",
    name: "PALAU",
  }, {
    code: "PY",
    name: "PARAGUAY",
  }, {
    code: "QA",
    name: "QATAR",
  }, {
    code: "RO",
    name: "ROMANIA",
  }, {
    code: "RS",
    name: "SERBIA",
  }, {
    code: "RU",
    name: "RUSSIAN FEDERATION",
  }, {
    code: "RW",
    name: "RWANDA",
  }, {
    code: "SA",
    name: "SAUDI ARABIA",
  }, {
    code: "SB",
    name: "SOLOMON ISLANDS",
  }, {
    code: "SC",
    name: "SEYCHELLES",
  }, {
    code: "SD",
    name: "SUDAN",
  }, {
    code: "SE",
    name: "SWEDEN",
  }, {
    code: "SG",
    name: "SINGAPORE",
  }, {
    code: "SH",
    name: "SAINT HELENA",
  }, {
    code: "SI",
    name: "SLOVENIA",
  }, {
    code: "SK",
    name: "SLOVAKIA",
  }, {
    code: "SL",
    name: "SIERRA LEONE",
  }, {
    code: "SM",
    name: "SAN MARINO",
  }, {
    code: "SN",
    name: "SENEGAL",
  }, {
    code: "SO",
    name: "SOMALIA",
  }, {
    code: "SR",
    name: "SURINAME",
  }, {
    code: "ST",
    name: "SAO TOME AND PRINCIPE",
  }, {
    code: "SV",
    name: "EL SALVADOR",
  }, {
    code: "SY",
    name: "SYRIAN ARAB REPUBLIC",
  }, {
    code: "SZ",
    name: "SWAZILAND",
  }, {
    code: "TC",
    name: "TURKS AND CAICOS ISLANDS",
  }, {
    code: "TD",
    name: "CHAD",
  }, {
    code: "TG",
    name: "TOGO",
  }, {
    code: "TH",
    name: "THAILAND",
  }, {
    code: "TJ",
    name: "TAJIKISTAN",
  }, {
    code: "TK",
    name: "TOKELAU",
  }, {
    code: "TL",
    name: "TIMOR-LESTE",
  }, {
    code: "TM",
    name: "TURKMENISTAN",
  }, {
    code: "TN",
    name: "TUNISIA",
  }, {
    code: "TO",
    name: "TONGA",
  }, {
    code: "TR",
    name: "TURKEY",
  }, {
    code: "TT",
    name: "TRINIDAD AND TOBAGO",
  }, {
    code: "TV",
    name: "TUVALU",
  }, {
    code: "TW",
    name: "TAIWAN, PROVINCE OF CHINA",
  }, {
    code: "TZ",
    name: "TANZANIA, UNITED REPUBLIC OF",
  }, {
    code: "UA",
    name: "UKRAINE",
  }, {
    code: "UG",
    name: "UGANDA",
  }, {
    code: "US",
    name: "UNITED STATES",
  }, {
    code: "UY",
    name: "URUGUAY",
  }, {
    code: "UZ",
    name: "UZBEKISTAN",
  }, {
    code: "VA",
    name: "HOLY SEE (VATICAN CITY STATE)",
  }, {
    code: "VC",
    name: "SAINT VINCENT AND THE GRENADINES",
  }, {
    code: "VE",
    name: "VENEZUELA",
  }, {
    code: "VG",
    name: "VIRGIN ISLANDS, BRITISH",
  }, {
    code: "VI",
    name: "VIRGIN ISLANDS, U.S.",
  }, {
    code: "VN",
    name: "VIET NAM",
  }, {
    code: "VU",
    name: "VANUATU",
  }, {
    code: "WF",
    name: "WALLIS AND FUTUNA",
  }, {
    code: "WS",
    name: "SAMOA",
  }, {
    code: "XK",
    name: "KOSOVO",
  }, {
    code: "YE",
    name: "YEMEN",
  }, {
    code: "YT",
    name: "MAYOTTE",
  }, {
    code: "ZA",
    name: "SOUTH AFRICA",
  }, {
    code: "ZM",
    name: "ZAMBIA",
  }, {
    code: "ZW",
    name: 'ZIMBABWE',
  }];
  const [countryData, setCountryData] = useState(countryCodes)
  const [countrySettings, setCountrySettings] = useState({
    countryName: '',
    countryFlag: '',
  }) 

  const {
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  })

  const onSubmit = async () => {
    const newData = {
      flag: countrySettings.countryFlag,
      country: countrySettings.countryName,
    }
    try {
      await createSettingsCountry({ data: newData, token: localStorage.getItem('accessToken') })
    } catch (e) {
      console.log(e)
    }
  } 

  const onSearch = (e, type) => {
    const v = e.target.value

    if(type === 'country_name'){
      setCountrySettings((prev) => ({ ...prev, countryName: v }))
    }

    if(type === 'country_flag'){
      setCountrySettings((prev) => ({ ...prev, countryFlag: v }))
    }
    
    var list = [...countryCodes]

    list = list.filter(i => i.name.toLowerCase().includes(v.toLowerCase()))

    setCountryData(list)
  }

  const handleCountry = (i, type) => {
    if(type === 'country_name'){
      setShowMenu((prev) => ({ ...prev, showMenuOne: false }))
      setCountrySettings(prev => ({...prev, countryName: i.name}))
    }

    if(type === 'country_flag'){
      setShowMenu((prev) => ({ ...prev, showMenuTwo: false }))
      setCountrySettings(prev => ({...prev, countryFlag: i.name}))
    }
  }

  return (
    <>
      <div className={cls['company']}>
        <div className={cls['company-input']}>
          <p>Наименование страны</p>
          <ul className={cls['country-list-input']}>
            <input onChange={(e) => onSearch(e, 'country_name')} value={countrySettings.countryName} 
              placeholder='Выбрать' onClick={() => setShowMenu(prev => ({...prev, showMenuOne: !prev.showMenuOne }))}  type="text" />
            {
              countryData?.length !== 0 && (
                showMenu.showMenuOne && (
                  <div className={cls['country-menu-item']}>
                    {
                      countryData?.map(i => 
                        <li onClick={() => handleCountry(i, 'country_name')} className='' key={i.code}>
                          <img 
                            src={`https://flagcdn.com/${i.code.toLowerCase()}.svg`}
                          />
                          <p>{i.name}</p>
                        </li>)
                    }
                  </div>
                )
              )
            }
          </ul>
        </div>
        <div className={cls['company-input']}>
          <p>Флаг страны</p>
          <ul className={cls['country-list-input']}>
            <input onChange={(e) => onSearch(e, 'country_flag')} placeholder='Выбрать' 
              value={countrySettings.countryFlag} onClick={() => setShowMenu(prev => ({ ...prev, showMenuTwo: !prev.showMenuTwo }))}  type="text" />
            {
              countryData?.length !== 0 && (
                showMenu.showMenuTwo && (
                  <div className={cls['country-menu-item']}>
                    {
                      countryData?.map(i => 
                        <li onClick={() => handleCountry(i, 'country_flag')} className='' key={i.code}>
                          <img 
                            src={`https://flagcdn.com/${i.code.toLowerCase()}.svg`}
                          />
                          <p>{i.name}</p>
                        </li>)
                    }
                  </div>
                )
              )
            }
          </ul>
        </div>
        
        <button onClick={handleSubmit(onSubmit)} className={cls['company-saver']}>Сохранить</button>
      </div>
    </>
  )
}

export default CompanyCountries
