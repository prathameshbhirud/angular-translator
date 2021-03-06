import { InjectionToken } from '@angular/core';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';

export const TRANSLATIONS = new InjectionToken('translations');

const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_ES_NAME]: LANG_ES_TRANS,
    [LANG_ZH_NAME]: LANG_ZH_TRANS,
};

export const TRANSLATION_PROVIDERS = [
    {provide : TRANSLATIONS, useValue: dictionary}
];