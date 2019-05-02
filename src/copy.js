import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

const copy = {
    en: {
        copy: {
            cognitiveError: 'Cognitive Error'
        }  
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: copy,
  })

export default i18n;