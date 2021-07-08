document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    agrandarImagen();

    nombrarSkills();

    navegarLinkedin();

    navegarGithub();

    navegarFacebook();

    navegarInstagram();
});

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function agrandarImagen() {
    const proyectos = document.querySelectorAll('.portfolio-lista img');
    proyectos.forEach(function(imagen) {
        imagen.addEventListener('click', (e) => {
            const imagen = document.getElementById(e.target.id);
            const imagenId = parseInt(imagen.id);
            console.log(imagenId);
        
            const imagenGrande = document.createElement('IMG');
            imagenGrande.src = `build/img/img${imagenId}.webp`;

            const overlay = document.createElement('DIV');
            overlay.appendChild(imagenGrande);
            overlay.classList.add('overlay');

            const linkProyecto = document.createElement('A');
            linkProyecto.textContent = 'Visit site';
            linkProyecto.href = "https://primerproyectowebsebafretes.netlify.app/";
            linkProyecto.classList.add('link-site');

            const cerrarImagen = document.createElement('P');
            cerrarImagen.textContent = 'X';
            cerrarImagen.classList.add('btn-cerrar');

            if(imagenId === 2) {
                linkProyecto.href = "https://frontendstoresebafretes.netlify.app/";
            } else if(imagenId === 3) {
                linkProyecto.href = "https://distracted-hodgkin-7bbbe7.netlify.app/"
            } else if(imagenId === 4) {
                linkProyecto.href = "https://sebafretesasuncionrockpopfestival.netlify.app/"
            } else if(imagenId === 5) {
                linkProyecto.href = "https://sebafretespeluapppy.netlify.app/"
            };

            linkProyecto.onclick = function(e) {
                window.open(`${linkProyecto.href}`);
                e.preventDefault();
            }

            cerrarImagen.onclick = function() {
                overlay.remove();
            }

            overlay.onclick = function() {
                overlay.remove();
                body.classList.remove('fijar-body');
            }

            overlay.appendChild(linkProyecto);
            overlay.appendChild(cerrarImagen);
            
            const body = document.querySelector('body');
            body.appendChild(overlay);
            body.classList.add('fijar-body'); 
        });
    });
};

function nombrarSkills() {
    const skillsListado = document.querySelectorAll('.skills-lista img');
    skillsListado.forEach(function(skill) {
        skill.addEventListener('mouseover', (e) => {
            const lecciones = document.getElementById(e.target.id);
            const leccionesId = lecciones.id;
            console.log(leccionesId);

            const nombreSkills = document.createElement('P');
            nombreSkills.textContent = leccionesId;
            nombreSkills.classList.add('nombre-skills');
            
            if(leccionesId === 'HTML5') {
                document.querySelector('.primero').appendChild(nombreSkills);
            } else if(leccionesId === 'CSS3') {
                document.querySelector('.segundo').appendChild(nombreSkills);
            } else if(leccionesId === 'JavaScript') {
                document.querySelector('.tercero').appendChild(nombreSkills);
            } else if(leccionesId === 'NodeJs') {
                document.querySelector('.cuarto').appendChild(nombreSkills);
            } else if(leccionesId === 'Gulp') {
                document.querySelector('.quinto').appendChild(nombreSkills);
            } else if(leccionesId === 'SASS') {
                document.querySelector('.sexto').appendChild(nombreSkills);
            };

            lecciones.onmouseout = function() {
                nombreSkills.remove();
            }
        });
    });
}

function navegarLinkedin() {
    const linkLinkedin = document.createElement('A');
    linkLinkedin.href = "https://www.linkedin.com/in/juan-sebasti%C3%A1n-fretes-528b651b6/";

    const linkedin = document.querySelector('.linkedin');
    linkedin.addEventListener('click', function() {
        window.open(linkLinkedin.href);

        linkedin.appendChild(linkLinkedin);
    })
}

function navegarGithub() {
    const linkGithub = document.createElement('A');
    linkGithub.href = "https://github.com/SebaFretes";

    const github = document.querySelector('.github');
    github.addEventListener('click', function() {
        window.open(linkGithub.href);

        github.appendChild(linkGithub);
    })
}

function navegarFacebook() {
    const linkFacebook = document.createElement('A');
    linkFacebook.href = "https://www.facebook.com/sebas.fretes.7";

    const facebook = document.querySelector('.facebook');
    facebook.addEventListener('click', function() {
        window.open(linkFacebook.href);

        facebook.appendChild(linkFacebook);
    })
}

function navegarInstagram() {
    const linkInsta = document.createElement('A');
    linkInsta.href = "https://www.instagram.com/sebafretes_/";

    const insta = document.querySelector('.instagram');
    insta.addEventListener('click', function() {
        window.open(linkInsta.href);

        insta.appendChild(linkInsta);
    })
}