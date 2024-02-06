document.addEventListener("DOMContentLoaded", async function() {
	document.body.style.overflow = 'hidden';
	typewriter();
	projectsData = await getProjects();
	initCarousel(projectsData);
});

function navscroll(button) {
	var section = "about_me";
	switch(button.id){
		case "btn_aboutme":
			section = "about_me";
			break;
		case "btn_myskills":
			section = "my_skills";
			break;
		case "btn_work":
			section = "work_experience";
			break;
		case "btn_education":
			section = "education";
			break;		
		case "btn_projects":
			section = "my_skills";
			break;	
	}
	fill_typewriter();
	showcontent();
	document.getElementById(section).scrollIntoView();
}

function showcontent() {
	var elements = document.getElementsByClassName('aftertw');
  	for(i = 0; i < elements.length; i++) {
		document.body.style.overflow = 'visible';
    	elements[i].style.visibility = 'visible';
		elements[i].style.animation = 'fadein 2s';
  	}
}