import 'loaders.css';
import './scss/base.scss';
import './scss/splash.scss';
import './scss/home.scss';
import { screens, moveScreensOnKey } from './controlBox/navigation';
const DEFAULT_SCREEN_TO_SHOW = '#splash';

document.addEventListener('keydown', moveScreensOnKey);

//default screen set to splash
for (screen of screens) {
    if (screen !== DEFAULT_SCREEN_TO_SHOW) {
        $(screen).hide();
    }
}