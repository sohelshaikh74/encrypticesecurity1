// JavaScript for Content Carousel
const contentData = [
    {
        before: { title: "Before", role: "Fresher" },
        main: { img: "/img/placement/pallav.png", name: "Pallav Purohit", course: "Offensive Security Certified Professional from EncrypticSecurity<br>2023", hike: "60% Hike" },
        after: { title: "After", role: "Senior Cybersecurity Consultant" }
    },
    {
        before: { title: "Before", role: "Fresher" },
        main: { img: "/img/placement/aniket.png", name: "Aniket Pawar", course: "Advance Diploma in Cyber Security from EncrypticSecurity <br>2024", hike: "70% Hike" },
        after: { title: "After", role: "Associate Cyber Security Consultant" }
    },
    {
        before: { title: "Before", role: "Fresher" },
        main: { img: "/img/placement/pratham.png", name: "Pratham mandavkar", course: "Master's of Cyber Security from EncrypticSecurity <br>2024", hike: "50% Hike" },
        after: { title: "After", role: "Senior Analyst" }
    },
    {
        before: { title: "Before", role: "Fresher" },
        main: { img: "/img/placement/shivam.png", name: "Shivam Babal", course: "Advance Diploma in Cyber Security from EncrypticSecurity <br>2024", hike: "50% Hike" },
        after: { title: "After", role: "Associate Cyber Security Consultant" }
    },
    {
        before: { title: "Before", role: "Fresher" },
        main: { img: "/img/placement/rakshit.png", name: "Rakshit Gaikwad", course: "Advance Diploma in Cyber Security from EncrypticSecurity <br>2024", hike: "50% Hike" },
        after: { title: "After", role: "Associate Information Security Consultant" }
    },
 
];

let currentIndex = 0;

function updateContent(index) {
    const data = contentData[index];

    document.getElementById('before-content').innerHTML = `</h5><p>${data.before.role}</p>`;
    document.getElementById('profile-img').src = data.main.img;
    document.getElementById('main-name').innerText = data.main.name;
    document.getElementById('main-course').innerHTML = data.main.course;
    document.getElementById('main-hike').innerHTML = `<strong>${data.main.hike}</strong>`;
    document.getElementById('after-content').innerHTML = `<p>${data.after.role}</p>`;
    document.getElementById('current-slide').innerText = (index + 1) + '/5';
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
