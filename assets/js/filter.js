const projectGrid = document.querySelector('.project-grid');
const projects = Array.from(projectGrid.getElementsByClassName('project'));

const allTags = projects.flatMap(project => project.dataset.tags.split(' '));
const uniqueTags = [...new Set(allTags)];

const tagFilterContainer = document.getElementById('tagFilterContainer');

const allProjectsButton = document.createElement('button');
allProjectsButton.className = 'tag-filter-btn active';
allProjectsButton.dataset.tag = 'all';
allProjectsButton.textContent = 'All';
tagFilterContainer.appendChild(allProjectsButton);

uniqueTags.forEach(tag => {
  const tagButton = document.createElement('button');
  tagButton.className = 'tag-filter-btn';
  tagButton.dataset.tag = tag;
  tagButton.textContent = tag.replace(/_/g, ' ');
  tagFilterContainer.appendChild(tagButton);
});

const tagFilterBtns = Array.from(document.getElementsByClassName('tag-filter-btn'));

tagFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedTag = btn.dataset.tag;

    projects.forEach((project) => {
      const projectTags = project.dataset.tags.split(' ');
      const showProject = selectedTag === 'all' || projectTags.includes(selectedTag);
      project.style.display = showProject ? 'block' : 'none';
    });

    tagFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

projects.sort((a, b) => {
  const dateA = new Date(getUploadedDate(a));
  const dateB = new Date(getUploadedDate(b));
  return dateB - dateA;
});

projects.forEach((project) => projectGrid.appendChild(project));

function getUploadedDate(project) {
  const projectDate = project.querySelector('.project-date');
  return projectDate.textContent.trim();
}
