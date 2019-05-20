$("#homeStartButton").click(() => {
    document.dispatchEvent(new KeyboardEvent('keydown', { 'keyCode': 39 }));
})