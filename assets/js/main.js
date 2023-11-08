let theme = document.getElementById('theme');
console.log(theme);
theme.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
})