const moon = document.getElementById('icon-moon');

moon.addEventListener('click', ()=>{
    const form = document.getElementById('login-formulario')
    if(moon.classList.contains('fa-moon')){
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');

        form.classList.add('dark')
        return;
    }
    moon.classList.add('fa-moon');
    moon.classList.remove('fa-sun');
    form.classList.remove('dark');
})

