// Get the project grid element
const projectGrid = document.querySelector('.project-grid');

// Get all project elements within the project grid
const projects = Array.from(projectGrid.getElementsByClassName('project'));

// Extract unique tags from projects
const allTags = projects.flatMap(project => project.dataset.tags.split(' '));
const uniqueTags = [...new Set(allTags)];

// Generate tag buttons dynamically
const tagFilterContainer = document.getElementById('tagFilterContainer');

// Add a button for "All" projects
const allProjectsButton = document.createElement('button');
allProjectsButton.className = 'tag-filter-btn active';
allProjectsButton.dataset.tag = 'all';
allProjectsButton.textContent = 'All';
tagFilterContainer.appendChild(allProjectsButton);

uniqueTags.forEach(tag => {
  const tagButton = document.createElement('button');
  tagButton.className = 'tag-filter-btn';
  tagButton.dataset.tag = tag;
  tagButton.textContent = tag;
  tagFilterContainer.appendChild(tagButton);
});

// Add click event listeners for the tag buttons
const tagFilterBtns = Array.from(document.getElementsByClassName('tag-filter-btn'));

tagFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedTag = btn.dataset.tag;

    // Show/hide projects based on the selected tag
    projects.forEach((project) => {
      const projectTags = project.dataset.tags.split(' ');
      const showProject = selectedTag === 'all' || projectTags.includes(selectedTag);

      // Filter projects based on tags
      project.style.display = showProject ? 'block' : 'none';
    });

    // Add active class to the clicked button
    tagFilterBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  });
});

// Click event for the "All" button
allProjectsButton.addEventListener('click', () => {
  // Show all projects
  projects.forEach((project) => {
    project.style.display = 'block';
  });

  // Remove active class from other buttons
  tagFilterBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  // Add active class to the "All" button
  allProjectsButton.classList.add('active');
});

// Sort projects based on date
projects.sort((a, b) => {
  const dateA = new Date(getUploadedDate(a));
  const dateB = new Date(getUploadedDate(b));
  return dateB - dateA; // Sort in descending order (newest to oldest)
});

// Reorder projects within the grid
projects.forEach((project) => projectGrid.appendChild(project));

// Helper function to get the uploaded date from a project
function getUploadedDate(project) {
  const projectDate = project.querySelector('.project-date');
  return projectDate.textContent.trim(); // Use trim to remove any extra whitespace
}
