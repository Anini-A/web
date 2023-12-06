// analytics.js

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-C58XWP0H25');

function trackButtonClick(Me) {
  gtag('event', 'Button_Click', {
    'event_category': 'Button',
    'event_label': Me,
  });
}

function trackButtonClick(Projects) {
  gtag('event', 'Button_Click', {
    'event_category': 'Button',
    'event_label': Projects,
  });
}

function trackButtonClick(Resume) {
  gtag('event', 'Button_Click', {
    'event_category': 'Button',
    'event_label': Resume,
  });
}



/*function trackReadMoreClick(projectTitle) {
  gtag('event', 'Read_More_Click', {
    'event_category': 'Project',
    'event_label': projectTitle,
  });
}

function trackProjectTagClick(tagName) {
  gtag('event', 'Project_Tag_Click', {
    'event_category': 'Project',
    'event_label': tagName,
  });
}

function trackResumeDownload() {
  gtag('event', 'Resume_Download', {
    'event_category': 'Resume',
    'event_label': 'Download',
  });
} */
