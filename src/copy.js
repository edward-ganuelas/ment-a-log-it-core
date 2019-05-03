import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const copy = {
    en: {
        copy: {
            automaticNegativeThought: 'Automatic Negative Thoughts',
            cognitiveError: 'Cognitive Error',
            rationalAlternativeThought: 'Rational Alternative Thoughts'
        }  
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: copy,
  })

export default i18n;