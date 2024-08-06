const profiles = [
    {
      name: "Mohit Singh",
      details: "EPGP in Data Science from IIITB 2019",
    //   pic: "mohit-singh.png",
      pic: "/img/team/ronak-sir.jpg",
      before: "Tech Mahindra",
      beforeRole: "Software Engineer",
      after: "Wipro",
      afterRole: "Data Scientist",
      hike: "60% Hike",
    },
    {
      name: "Anjali Sharma",
      details: "MBA from IIM Bangalore 2018",
      pic: "/img/team/shivam-sir.JPG",
      before: "Infosys",
      beforeRole: "Business Analyst",
      after: "Amazon",
      afterRole: "Product Manager",
      hike: "50% Hike",
    },
  ];

  let currentIndex = 0;

  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    updateProfile();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % profiles.length;
    updateProfile();
  });

  function updateProfile() {
    const profile = profiles[currentIndex];
    document.getElementById("profile-pic").src = profile.pic;
    document.getElementById("name").innerText = profile.name;
    document.getElementById("details").innerText = profile.details;
    document.querySelector(".before p").innerText = profile.beforeRole;
    document.querySelector(".before img").src = `${profile.before
      .toLowerCase()
      .replace(" ", "-")}-logo.png`;
    document.querySelector(".after p").innerText = profile.afterRole;
    document.querySelector(".after img").src = `${profile.after
      .toLowerCase()
      .replace(" ", "-")}-logo.png`;
    document.querySelector(".hike").innerText = profile.hike;
    document.getElementById("counter").innerText = `${currentIndex + 1}/${
      profiles.length
    }`;
  }

  updateProfile();