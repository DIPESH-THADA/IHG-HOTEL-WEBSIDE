
const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}


const fromText = document.querySelector('.from-text')
const toText = document.querySelector('.to-text')
const selectTag = document.querySelectorAll('select')
exchangeIcon = document.querySelector(".exchange")
translateBtn = document.querySelector(".translate-btn")
icons = document.querySelectorAll('.row i')

selectTag.forEach((tag, id) => {
for(const country_code in countries) {
    let selected;
    if(id == 0 && country_code == "en-GB") {
        selected = "selected"
    }else if(id == 1 && country_code == "ne-NP"){
        selected = "selected"
    }

    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option) //adding options tag inside select tag
    
}
})

exchangeIcon.addEventListener('click', () => {
    // exchanging the textarea and select tag values
    let tempText = fromText.value,
    tempLang = selectTag[0].value
    fromText.value = toText.value
    selectTag[0].value = selectTag[1].value
     toText.value = tempText
     selectTag[1].value = tempLang
})

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
    tranlateFrom = selectTag[0].value, // getting fromselect tag value
    tranlateTo = selectTag[1].value // getting toselect tag value
    if(!text) return
    toText.setAttribute("placeholder", "Translating...")
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${tranlateFrom}|${tranlateTo}`
    // fetching api response and returning it with parsing into js obj
    // and in another then method receiving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText
        toText.setAttribute("placeholder", "Translation")
    })
})

icons.forEach(icons => {
    icons.addEventListener('click', ({target})=> {
        if(target.classList.contains("fa-copy")) {
            // if clicked icons has from id copy the fromtextarea value else copy the totextarea value
        if(target.id == "from") {
            navigator.clipboard.writeText(fromText.value)
        }else{
            navigator.clipboard.writeText(toText.value)
        }
    }
        else{
        let utterance
        // if clicked icons has from id speak the fromtextarea value else copy the totextarea value
        if(target.id == 'from') {
            utterance = new SpeechSynthesisUtterance(fromText.value)
            utterance.lang = selectTag[0].value
        }else{
            utterance = new SpeechSynthesisUtterance(toText.value)
            utterance.lang = selectTag[1].value
        }
        speechSynthesis.speak(utterance) //speak the passed utterrance
    }
        
    })
})