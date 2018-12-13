const myProjects = [
    {
        name: 'Lambd-A-Job',
        host: 'https://rhetorical-rate.surge.sh/',
        repo: 'https://github.com/kennyzhan9/Lambd-a-Job',
        img: '../images/wdiP4.png'
    },
    {
        name: 'MovieGenerator',
        host: 'https://movie-generator.surge.sh/',
        repo: 'https://github.com/Lukef9/MovieGenerator',
        img: '../images/wdiP3.png'
    },
    {
        name: 'Lambdafy',
        host: 'https://glacial-tundra-32716.herokuapp.com/',
        repo: 'https://github.com/kennyzhan9/Lambdafy',
        img: '../images/wdiP2.png'
    },
    {
        name: 'Test-Your-Memery Game',
        host: 'https://kennyzhan9.github.io/Test-Your-Memery-Game/',
        repo: 'https://github.com/kennyzhan9/Test-Your-Memery-Game',
        img: '../images/wdiP1.png'
    },
];

function showcase() {
    const targetDiv = document.getElementById('my-projects');

    myProjects.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('this-project');

        const projectTitle = document.createElement('h2');
        projectTitle.innerHTML = `${project.name}`;

        const projectImg = document.createElement('img');
        projectImg.setAttribute('src', `${project.img}`);

        const projectLink = document.createElement('a');
        projectLink.classList.add('btn');
        projectLink.setAttribute('href', `${project.host}`);
        projectLink.target = '_blank';
        projectLink.rel = 'noopener noreferrer';
        projectLink.innerHTML = 'View App';

        const projectRepo = document.createElement('a');
        projectRepo.classList.add('btn');
        projectRepo.setAttribute('href', `${project.repo}`);
        projectRepo.target = '_blank';
        projectRepo.rel = 'noopener noreferrer';
        projectRepo.innerHTML = 'View Code';

        targetDiv.appendChild(projectDiv);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectImg);
        projectDiv.appendChild(projectLink);
        projectDiv.appendChild(projectRepo);
    });
}
showcase();