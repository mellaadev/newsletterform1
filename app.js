document.addEventListener('DOMContentLoaded', function() {
    startApp();
})

function startApp() {
    btnSuscribe();

    cerrarForm();

    submitForm();
}

function btnSuscribe() {
    const btn = document.querySelector('.newsletter');

    btn.addEventListener('click', function() {

        const form = document.querySelector('.newsletterform');
        form.style.opacity = '1';
        form.style.visibility = 'visible';
        form.style.width = '70rem';
        form.style.position = 'relative';
        form.style.margin = '0 0 0 2rem'

        const contenidoForm = document.querySelector('.content')
        contenidoForm.style.opacity = '1';
    });
}

function cerrarForm() {
    const btnCerrar = document.querySelector('.cerrar');

    btnCerrar.addEventListener('click', cerrarTodo)
}

function submitForm() {
    const submitBtn = document.querySelector('.submit');

    submitBtn.addEventListener('click', e => {
        e.preventDefault();

        cerrarTodo();
    })
}

function cerrarTodo() {
    const form = document.querySelector('.newsletterform');
    form.style.opacity = '0';
    form.style.visibility = 'hidden';
    form.style.width = '0';

    const contenidoForm = document.querySelector('.content')
    contenidoForm.style.opacity = '0';
}