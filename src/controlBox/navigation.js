const DEFAULT_SCREEN_INDEX = 0;
export const screens = ['#splash', '#home'];
let currentScreenIndex = DEFAULT_SCREEN_INDEX;

function moveNext() {
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

