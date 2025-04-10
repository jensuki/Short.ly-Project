const form = document.querySelector('#link-form');
const input = document.querySelector('#link-input');
const errMsg = document.querySelector('#err-msg');

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

btn.addEventListener('click', navToggle);
form.addEventListener('submit', formSubmit);

// toggle mobile menu
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

// validate url
function isValidUrl(url) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator
    return !!urlPattern.test(url);
}

function formSubmit(e) {
    e.preventDefault();

    if (input.value === '') {
        errMsg.innerHTML = 'Please enter a URL'
        input.classList.add('border-red');
    } else if (!isValidUrl(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red');
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red');
    }
}