import { orderList, entryObject, aboutMeObject, projectsList, skillsList, experienceList, contactObject } from "./objects";

let loadOrderListComponents = () => {
	for (let i = 0; i < orderList.length; i++) {
		let orderListName = orderList[i];

		// adding components to the tracker list
		let orderListElement = document.createElement("div");
		orderListElement.classList.add(`track-${orderListName}`);
		if (orderListName === "about") {
			orderListElement.textContent = "about me";
		} else {
			orderListElement.textContent = orderListName;
		}

		document.querySelector(".tracker-items").appendChild(orderListElement);


		// adding components to the content area
		let orderListContentElement = document.createElement("div");
		orderListContentElement.classList.add(`${orderListName}`);
		orderListContentElement.id = `${orderListName}`;

		let orderListContentElementTitle = document.createElement("h1");
		if (orderListName === "about") {
			orderListContentElementTitle.textContent = "about me";
		} else {
			orderListContentElementTitle.textContent = orderListName;
		}
		orderListContentElement.appendChild(orderListContentElementTitle);

		// adding cards <div>, if needed, into the content area
		if (orderListName === "projects") {
			let projectsListElementCard = document.createElement("div");
			projectsListElementCard.classList.add(`project-cards`);
			orderListContentElement.appendChild(projectsListElementCard);
		}
		if (orderListName === "skills") {
			let skillsListElement = document.createElement("div");
			skillsListElement.classList.add(`list-skills`);
			orderListContentElement.appendChild(skillsListElement);
		}
		if (orderListName === "experience") {
			let experienceListElementCard = document.createElement("div");
			experienceListElementCard.classList.add(`experience-cards`);
			orderListContentElement.appendChild(experienceListElementCard);
		}
		if (orderListName === "contact") {
			let contactListElementCard = document.createElement("div");
			contactListElementCard.classList.add(`contact-card`);
			orderListContentElement.appendChild(contactListElementCard);
		}

		document.querySelector(".content").appendChild(orderListContentElement);
	}
}

loadOrderListComponents();

const container = document.querySelector(".container");
const tracker = document.querySelector(".tracker");
const content = document.querySelector(".content");


let targetList = []
for (let i = 0; i < orderList.length; i++) {
	targetList.push(document.querySelector(`.${orderList[i]}`))
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const targetPosition = targetList[0].offsetTop;
  if (scrollPosition >= targetPosition) {
    container.classList.add("container--show");
    tracker.classList.add("tracker--show");
    content.classList.add("content--show");
  } else {
    container.classList.remove("container--show");
    tracker.classList.remove("tracker--show");
    content.classList.remove("content--show");
  }

  if (
    scrollPosition + targetList[0].offsetTop >=
    targetList[0].offsetTop + window.innerHeight
  ) {
    tracker.classList.remove("tracker--show");
    tracker.classList.add("tracker--sticky");
    content.classList.remove("content--show");
    content.classList.add("content--nonsticky");
  } else {
    tracker.classList.remove("tracker--sticky");
    content.classList.remove("content--nonsticky");
  }

  for (let i = 0; i < targetList.length; i++) {
	if (scrollPosition >= targetList[i].offsetTop) {
		if (i-1 >= 0)
			document.querySelector(`.track-${orderList[i-1]}`).classList.remove("highlight");
		document.querySelector(`.track-${orderList[i]}`).classList.add("highlight");
	} else {
		document.querySelector(`.track-${orderList[i]}`).classList.remove("highlight");
	}
  }
});

let svgOpenElement = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320z" fill="#fff"/>
<path d="M80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="#fff"/>
</svg>`

let svgGithubElement = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill=#fff /></svg>`


let loadEntry = () => {
	let entryContent = document.querySelector(".entry-content");
	entryContent.style.backgroundImage = `url(${entryObject.image})`;
	entryContent.style.backgroundSize = "cover";
	entryContent.style.backgroundPosition = "center";
	entryContent.style.backgroundRepeat = "no-repeat";
	entryContent.style.backgroundAttachment = "fixed";

	let entryContentContainer = document.createElement("div");
	entryContentContainer.classList.add("entry-content-container");

	let entryContentTitle = document.createElement("div");
	entryContentTitle.classList.add("entry-content-title");
	entryContentTitle.textContent = entryObject.name;
	entryContentTitle.style.color = entryObject.nameTextColor;

	let entryContentSubtitle = document.createElement("div");
	entryContentSubtitle.classList.add("entry-content-subtitle");
	entryContentSubtitle.textContent = entryObject.role;
	entryContentSubtitle.style.color = entryObject.roleTextColor;

	entryContentContainer.appendChild(entryContentTitle);
	entryContentContainer.appendChild(entryContentSubtitle);

	entryContent.appendChild(entryContentContainer);

	if (entryObject.websiteTheme == "dark") {
		document.querySelector("body").style.backgroundColor = 'black';
		document.querySelector("body").style.color = 'white';
	} else {
		document.querySelector("body").style.backgroundColor = 'white';
		document.querySelector("body").style.color = 'black';
	}
}

let loadAboutMe = () => {
	let aboutContent = document.createElement("div");
	aboutContent.classList.add("aboutContent");

	let aboutImage = document.createElement("div");
	aboutImage.classList.add("about-image");

	let aboutImageElement = document.createElement("img");
	aboutImageElement.src = aboutMeObject.image;
	aboutImageElement.alt = "About Me Image";

	aboutImage.appendChild(aboutImageElement);

	let aboutDesc = document.createElement("div");
	aboutDesc.classList.add("about-desc");
	aboutDesc.innerHTML = aboutMeObject.aboutMe;

	aboutContent.appendChild(aboutImage);
	aboutContent.appendChild(aboutDesc);

	document.querySelector(".about").appendChild(aboutContent);
}

let loadProjects = () => {
	for (let i = 0; i < projectsList.length; i++) {
		let project = projectsList[i];

		let projectCard = document.createElement("div");
		projectCard.classList.add("project-card");

		let projectImage = document.createElement("div");
		projectImage.classList.add("project-image");

		let projectImageImg = document.createElement("img");
		projectImageImg.classList.add("project-image-img");
		projectImageImg.src = project.image;
		projectImageImg.alt = project.name;

		projectImage.appendChild(projectImageImg);

		let projectInfo = document.createElement("div");
		projectInfo.classList.add("project-info");

		let projectNameInfo = document.createElement("div");
		projectNameInfo.classList.add("project-name-info");

		let projectTitle = document.createElement("span");
		projectTitle.classList.add("project-title");
		projectTitle.textContent = project.name;

		let projectLink = document.createElement("a");
		projectLink.classList.add("project-link");
		projectLink.href = project.projectLink;
		projectLink.innerHTML = svgOpenElement;

		let githubLink = document.createElement("a");
		githubLink.classList.add("github-link");
		githubLink.href = project.githubLink;
		githubLink.innerHTML = svgGithubElement;

		projectNameInfo.appendChild(projectTitle);
		if (project.projectLink != undefined && project.projectLink.trim() != "") {
			projectNameInfo.appendChild(projectLink);
		}
		if (project.githubLink != undefined && project.githubLink.trim() != "") {
			projectNameInfo.appendChild(githubLink);
		}

		let projectDescription = document.createElement("div");
		projectDescription.classList.add("project-description");
		projectDescription.textContent = project.description;

		projectInfo.appendChild(projectNameInfo);
		projectInfo.appendChild(projectDescription);

		if (i%2==0) {
			projectCard.appendChild(projectImage);
			projectCard.appendChild(projectInfo);
		} else {
			projectCard.appendChild(projectInfo);
			projectCard.appendChild(projectImage);
		}

		document.querySelector(".project-cards").appendChild(projectCard);
	}
};

let listSkills = () => {
	skillsList.forEach((skill) => {
		let skillElement = document.createElement("div");
		skillElement.classList.add("skill");
		let skillSpan = document.createElement("span");
		skillSpan.textContent = skill;
		skillElement.appendChild(skillSpan);
		document.querySelector(".list-skills").appendChild(skillElement);
	});
};

let loadExperience = () => {
	for (let i=0; i<experienceList.length; i++) {
		let experience = experienceList[i];

		let experienceCard = document.createElement("div");
		experienceCard.classList.add("experience-card");

		let experienceImage = document.createElement("div");
		experienceImage.classList.add("experience-image");

		let experienceImageImg = document.createElement("img");
		experienceImageImg.classList.add("experience-image-img");
		experienceImageImg.src = experience.image;
		experienceImageImg.alt = experience.name;

		experienceImage.appendChild(experienceImageImg);

		let experienceInfo = document.createElement("div");
		experienceInfo.classList.add("experience-info");

		let experienceNameInfo = document.createElement("div");
		experienceNameInfo.classList.add("experience-name-info");

		let experienceTitle = document.createElement("span");
		experienceTitle.classList.add("experience-title");
		experienceTitle.textContent = experience.name;

		let experienceRole = document.createElement("span");
		experienceRole.classList.add("experience-role");
		experienceRole.textContent = experience.role;

		let dash = document.createElement("span");
		dash.classList.add("dash");
		dash.textContent = " @ ";

		experienceNameInfo.appendChild(experienceRole);
		experienceNameInfo.appendChild(dash);
		experienceNameInfo.appendChild(experienceTitle);

		let experienceDuration = document.createElement("div");
		experienceDuration.classList.add("experience-duration");
		experienceDuration.textContent = experience.duration;

		experienceInfo.appendChild(experienceNameInfo);
		experienceInfo.appendChild(experienceDuration);

		if (i%2==0) {
			experienceCard.appendChild(experienceInfo);
			experienceCard.appendChild(experienceImage);
		} else {
			experienceCard.appendChild(experienceImage);
			experienceCard.appendChild(experienceInfo);
		}

		document.querySelector(".experience-cards").appendChild(experienceCard);
	}
};

let loadContact = () => {
	for (const key in contactObject) {
		let contactElement = document.createElement("div");
		contactElement.classList.add("contact-item");
		let contactLink = document.createElement("a");
		contactLink.href = contactObject[key];
		contactLink.innerHTML = key;

		let slash = document.createElement("span");
		slash.classList.add("slash");
		slash.textContent = " | ";

		contactElement.appendChild(slash);
		contactElement.appendChild(contactLink);
		document.querySelector(".contact-card").appendChild(contactElement);
	}
	let slash = document.createElement("span");
	slash.classList.add("slash");
	slash.textContent = " | ";
	let length = document.querySelectorAll(".contact-item").length;
	document.querySelectorAll(".contact-item")[length-1].appendChild(slash);
}

let loadFooter = () => {
	let gitStarsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" fill="#fff" /></svg>`;
	let gitForksSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" fill="#fff" /></svg>`;

	document.querySelector(".git-stars").innerHTML = gitStarsSvg;
	document.querySelector(".git-forks").innerHTML = gitForksSvg;

	const response = fetch("https://api.github.com/repos/sashbros/sashbros.github.io")
						.then(response => response.json())
						.then(data => {
							let gitStars = document.createElement("span");
							gitStars.classList.add("git-stars-count");
							gitStars.textContent = data.stargazers_count;

							let gitForks = document.createElement("span");
							gitForks.classList.add("git-forks-count");
							gitForks.textContent = data.forks_count;

							document.querySelector(".git-stars").appendChild(gitStars);
							document.querySelector(".git-forks").appendChild(gitForks);
						});
}


loadEntry();
loadAboutMe();
loadProjects();
listSkills();
loadExperience();
loadContact();
loadFooter();