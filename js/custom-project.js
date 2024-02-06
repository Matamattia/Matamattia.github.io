


document.addEventListener('DOMContentLoaded', function() {
    // Assumendo che projects sia il tuo array di progetti
    const projects = [
      {
    title: "CodeKataBattle",
    description: "Breve descrizione del Progetto 1. Questo progetto mira a fdfdizione del Progetto 1. Questo progetto mira a.",
    url: "https://github.com/sudoariel/repository1",
    languages: ["JavaScript", "HTML", "CSS"],
    logo: "path/to/logo1.png"
  },
  {
    title: "Nome del Progetto 2",
    description: "Breve descrizione del Progetto 2. In questo progetto, abbiamo sviluppato...",
    url: "https://github.com/sudoariel/repository2",
    languages: ["Python", "Django"],
    logo: "../assets/favicon.ico"
  },
      // Array di progetti qui
    ];

    // Assegna i progetti alle card
    if(projects.length > 0) {
        updateCard('left_card', projects[0]);
    }
    if(projects.length > 1) {
        updateCard('center_card', projects[1]);
    }
    if(projects.length > 2) {
        updateCard('right_card', projects[2]);
    }

    function updateCard(cardId, project) {
        const card = document.getElementById(cardId);
        card.querySelector('.card_title').textContent = project.title;
        card.querySelector('.card_logo').src = project.logo;
        card.querySelector('.card_logo').alt = `Logo of ${project.title}`;
        card.querySelector('.card_description').textContent = project.description;
        card.querySelector('.projectsbutton').onclick = function() { window.location.href = project.url; };
        card.querySelector('.projectsbutton').textContent = '';
    }
});
