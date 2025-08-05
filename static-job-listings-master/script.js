"use strict";

const date = document.querySelector(".date");
const today = new Date().getFullYear();
date.textContent = today;

const filterBar = document.querySelector(".filter-bar");
const filtersDiv = document.querySelector(".filters");
const clearBtn = document.querySelector(".clear-btn");
const filterButtons = document.querySelectorAll(".filter-button");
const jobListings = document.querySelectorAll(".job-listing");
const jobListingContainer = document.querySelector(".main2");
const tags = document.querySelectorAll(".tag");
const removeButtons = document.querySelectorAll(".remove-btn");
const filterTags = document.querySelectorAll(".filter-tag");

const job = [
  {
    company: "Photosnap",
    logo: "photosnap.svg",
    isNew: true,
    isFeatured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    tags: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },

  {
    company: "Manage",
    logo: "manage.svg",
    isNew: true,
    isFeatured: true,
    position: "Full Stack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    tags: ["Python", "React"],
    tools: [],
  },

  {
    company: "Account",
    logo: "account.svg",
    isNew: true,
    isFeatured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    tags: ["React", "Sass", "JavaScript"],
    tools: [],
  },

  {
    company: "MyHome",
    logo: "myhome.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "contract",
    location: "USA Only",
    tags: ["CSS", "JavaScript"],
    tools: [],
  },

  {
    company: "Loop Studios",
    logo: "loop-studios.svg",
    isNew: false,
    isFeatured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    tags: ["Ruby", "Sass", "JavaScript"],
    tools: [],
  },

  {
    company: "FaceIt",
    logo: "faceit.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Backend Developer",
    role: "backend",
    level: "Midweight",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "uk Only",
    tags: ["Ruby", "Ror"],
    tools: [],
  },

  {
    company: "Shortly",
    logo: "shortly.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    tags: ["HTML", "JavaScript", "Sass"],
    tools: [],
  },

  {
    company: "Insure",
    logo: "insure.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    tags: ["Vue", "JavaScript", "Sass"],
    tools: [],
  },

  {
    company: "Eyecam Co.",
    logo: "eyecam-co.svg",
    isNew: false,
    isFeatured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "  Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    tags: ["Python", "JavaScript", "Django"],
    tools: [],
  },

  {
    company: "The Air Filter Company",
    logo: "the-air-filter-company.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    tags: ["React", "JavaScript", "Sass"],
    tools: [],
  },

  {
    company: "Web Devs",
    logo: "code.svg",
    isNew: false,
    isFeatured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    tags: ["React", "JavaScript", "Sass"],
    tools: [],
  },
];

let activeFilters = [];

// render job listings
const renderJobListings = () => {
  // remove existing job listings
  jobListingContainer.innerHTML = "";
  // clear previous filter tags
  // filtersDiv.innerHTML = "";

  jobListings.forEach((el) => {
    el.remove();
  });

  // filtering job listings
  const filterJobListings = job.filter((job) =>
    activeFilters.every((f) => job.tags.includes(f))
  );

  // render filtered job listings
  filterJobListings.forEach((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job-listing");
    jobDiv.innerHTML = `<div class="company-logo">
        <img src="./images/${job.logo}" alt="${job.company} Logo">
      </div>
      <div class="container">
        <div class="types">
          <p class="type">${job.company}</p>
          ${job.isNew ? '<span class="new">NEW!</span>' : ""}
          ${job.isFeatured ? '<span class="featured">FEATURED</span>' : ""}
        </div>
        <div class="job-details">
          <h3 class="job-title">${job.position}</h3>
          <div class="other-details">
            <span class="days">${job.postedAt}</span>
            <span>.</span>
            <span class="contract">${job.contract}</span>
            <span>.</span>
            <span class="location">${job.location}</span>
          </div>
        </div>
      </div>
      <div class="tags">
        ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>`;
    jobListingContainer.appendChild(jobDiv);
  });

  // add event listeners to filter buttons
  document.querySelectorAll(".job-listing .tag").forEach((tagEl) => {
    tagEl.addEventListener("click", () => {
      const tagName = tagEl.textContent;
      if (!activeFilters.includes(tagName)) {
        activeFilters.push(tagName);
        updateFilterBar();
        renderJobListings();
      }
    });
  });
};

// Update filter bar
function updateFilterBar() {
  filtersDiv.innerHTML = "";
  activeFilters.forEach((filter) => {
    const span = document.createElement("span");
    span.className = "filter-tag";
    span.innerHTML = `${filter} <button class="remove-btn">✖</button>`;
    span.removeBtn = span.querySelector(".remove-btn");

    // add a filter tag button
    filterTags.forEach((filterTag) => {
      filterTag.addEventListener("click", () => {
        const tagName = filterTag.textContent;
      });
    });
    // Add click event to remove button
    span.querySelector(".remove-btn").addEventListener("click", () => {
      activeFilters = activeFilters.filter((f) => f !== filter);
      updateFilterBar();
      renderJobListings();
    });
    filtersDiv.appendChild(span);
  });
  filterBar.style.display = activeFilters.length > 0 ? "flex" : "none";
}

// Clear all filters
clearBtn.addEventListener("click", () => {
  activeFilters = [];
  updateFilterBar();
  renderJobListings();
});

// Initial render
// updateFilterBar();
renderJobListings();
