// JavaScript for Content Carousel
const contentData = [
    {
        before: { title: "Before", role: "Software Engineer" },
        main: { img: "/img/placement/aniket.png", name: "Mohit Singh", course: "EPGP in Data Science from IIITB<br>2019", hike: "60% Hike" },
        after: { title: "After", role: "Data Scientist" }
    },
    {
        before: { title: "Before", role: "Analyst" },
        main: { img: "/img/team/pravin-sir.jpg", name: "Anita Verma", course: "MBA in Data Science from ABC University<br>2020", hike: "70% Hike" },
        after: { title: "After", role: "Senior Data Scientist" }
    },
    {
        before: { title: "Before", role: "Data Analyst" },
        main: { img: "/img/team/shivam-sir.jpg", name: "Rohit Sharma", course: "PG Diploma in Data Science from XYZ Institute<br>2018", hike: "50% Hike" },
        after: { title: "After", role: "Data Scientist Lead" }
    },
    {
        before: { title: "Before", role: "System Engineer" },
        main: { img: "image4.jpg", name: "Priya Desai", course: "MSc in Data Science from DEF College<br>2017", hike: "80% Hike" },
        after: { title: "After", role: "AI Specialist" }
    }
];

let currentIndex = 0;

function updateContent(index) {
    const data = contentData[index];

    document.getElementById('before-content').innerHTML = `<h5>${data.before.title}</h5><p>${data.before.role}</p>`;
    document.getElementById('profile-img').src = data.main.img;
    document.getElementById('main-name').innerText = data.main.name;
    document.getElementById('main-course').innerHTML = data.main.course;
    document.getElementById('main-hike').innerHTML = `<strong>${data.main.hike}</strong>`;
    document.getElementById('after-content').innerHTML = `<h5>${data.after.title}</h5><p>${data.after.role}</p>`;
    document.getElementById('current-slide').innerText = (index + 1) + '/4';
}

function prevContent() {
    currentIndex = (currentIndex === 0) ? contentData.length - 1 : currentIndex - 1;
    updateContent(currentIndex);
}

function nextContent() {
    currentIndex = (currentIndex === contentData.length - 1) ? 0 : currentIndex + 1;
    updateContent(currentIndex);
}

// Initialize with the first content
updateContent(currentIndex);
