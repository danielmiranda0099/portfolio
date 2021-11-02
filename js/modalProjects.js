const projects = [
    {
        "id": "weatherApp",
        "name": "Weather App",
        "descriptions": "Este proyecto está construido sobre React, para obtener los datos del clima de las ciudades la página consume los dados proporcionados por la API de <a href='https://openweathermap.org/' target='_blank'><i>open wheader</i></a>",
        "image": "https://raw.githubusercontent.com/danielmiranda0099/portfolio/master/img/img-projects/weather-app.PNG",
        "linkWeb": "https://danielmiranda0099.github.io/wheather-app-react/",
        "linkGithub": "https://github.com/danielmiranda0099/wheather-app-react",
        "icons": '<i class="fab fa-react"><i class="fab fa-js"></i><i class="fab fa-css3-alt"></i></i><i class="fab fa-html5"></i>'
    },
    {
        "id": "countryQuiz",
        "name": "Country Quiz",
        "descriptions": "Esta aplicación esta construida sobre React, country quiz es un juego en el cual por medio de preguntas se evalúa que tanto saben las personas de las capitales de los países.",
        "image": "https://raw.githubusercontent.com/danielmiranda0099/portfolio/master/img/img-projects/country-quiz.PNG",
        "linkWeb": "https://danielmiranda0099.github.io/country-quiz-app/",
        "linkGithub": "https://github.com/danielmiranda0099/country-quiz-app",
        "icons": '<i class="fab fa-react"><i class="fab fa-js"></i><i class="fab fa-css3-alt"></i></i><i class="fab fa-html5"></i>'
    },
    {
        "id": "todoList",
        "name": "Todo List",
        "descriptions": "Aplicación web donde puedes guardar y gestionar las tareas pendientes.",
        "image": "https://raw.githubusercontent.com/danielmiranda0099/portfolio/master/img/img-projects/todo-list.PNG",
        "linkWeb": "https://danielmiranda0099.github.io/listsTasks/",
        "linkGithub": "https://github.com/danielmiranda0099/listsTasks",
        "icons": '<i class="fab fa-js"></i><i class="fab fa-css3-alt"></i></i><i class="fab fa-html5"></i>'
    }
]


const d = document;

export function cardProjects(){
    const $containerProject = d.querySelector('.containerProject');
    const $fragment = d.createDocumentFragment();
    
    projects.forEach( el => {
        const $project = d.createElement('div');
        $project.classList.add('project','modalBox');
        $project.setAttribute('data-modal', ".container-modalBoxProject");
        $project.setAttribute('data-cardProject', el.id);
        $project.style.backgroundImage= `url(${el.image})`;

        const $fa_eye = d.createElement('i');
        $fa_eye.classList.add('fas', 'fa-eye');
        $fa_eye.setAttribute('data-modal', ".container-modalBoxProject");

        const $efect_over_project = d.createElement('div');
        $efect_over_project.classList.add('efect-over-project', 'modalBox');
        $efect_over_project.setAttribute('data-modal', '.container-modalBoxProject');

        $project.appendChild($fa_eye);
        $project.appendChild($efect_over_project);

        $fragment.appendChild($project);
    })


    $containerProject.appendChild($fragment);
}


export function modalProjects(){
    d.addEventListener( "click", (e) => {
        if(e.target.matches('.project') || e.target.matches('.project *')){
            const data_cardProject = e.target.getAttribute('data-cardProject') ? e.target.getAttribute('data-cardProject') : e.target.parentElement.getAttribute('data-cardProject');

            const project = projects.filter( (el) => {
                return el.id === data_cardProject;
            })

            d.querySelector('.title-project').innerHTML = project[0].name;
            d.querySelector('.description-project').innerHTML = project[0].descriptions;
            d.querySelector('.icon-project').innerHTML = project[0].icons;

            d.querySelector('.project-link-web').innerHTML = `<i class="fas fa-globe"></i><a href=${project[0].linkWeb} target='_blank'>ir al sitio web</a>`
            d.querySelector('.project-link-github').innerHTML = `<i class="fab fa-github"></i><a href=${project[0].linkGithub} target='_blank'>ir al repositorio</a>`
            
        }
    })
}
