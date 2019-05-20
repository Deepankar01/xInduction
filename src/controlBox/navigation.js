import { screens, DEFAULT_SCREEN_INDEX } from './constants';
let currentScreenIndex = DEFAULT_SCREEN_INDEX;

function moveNext(index) {
    if (screens[currentScreenIndex + 1] !== undefined) {
        currentScreenIndex = currentScreenIndex + 1;
    }
}
function movePrevious() {
    if (screens[currentScreenIndex - 1] !== undefined) {
        currentScreenIndex = currentScreenIndex - 1;
    }
}
function displayScreen() {
    $(screens[currentScreenIndex]).show();
}

function hideScreen() {
    $(screens[currentScreenIndex]).hide();
}

export function moveScreensOnKey(event) {
    console.log('reaching');
    hideScreen();
    switch (event.keyCode) {
        case 37:
            movePrevious();
            break;
        case 39:
            moveNext();
            break;
        default:
    }
    displayScreen();
};

