/**
 * Created by wang.ding on 2017/7/12.
 * 当前使用的默认语言判断，及语言切换功能
 */
import Store from './store'

class language {
    setDefaultLanguage() {
        const store = new Store();
        const localLanguage = store.localGet('language');
        const clientLanguage = navigator.language;
        if (localLanguage === undefined) {
            if (clientLanguage === 'zh-CN' || clientLanguage === 'zh-TW' || clientLanguage === 'zh-HK') {
                store.localSave('language', clientLanguage);
            } else {
                store.localSave('language', 'en-US');
            }
        }
    }
}

export default language;
