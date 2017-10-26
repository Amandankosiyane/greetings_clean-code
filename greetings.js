function languagesGreeted() {
            if (document.getElementById('English').checked) {
                return 'english';
        } else if (document.getElementById('IsiXhosa').checked) {
                return 'xhosa';
        } else if (document.getElementById('Afrikaans').checked) {
                return 'afrikaans';
        } else {
                return '!checked'
        }
}


function greetedNames(names, checkedLanguages) {
        if (checkedLanguages === 'english') {
                return "Hello, " + names;
        }
        if (checkedLanguages === 'xhosa') {
                return "Molo, " + names;
        }
        if (checkedLanguages === 'afrikaans') {
                return "Halo, " + names;
        }
        if (checkedLanguages === '!checked') {
                alert('please write a name first and select a language');
        }
}
