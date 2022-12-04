// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;  
  } 
  if (license == 'Apache 2.0') {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license == 'MIT') {
    return "https://opensource.org/licenses/MIT"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return ``;
  } else {
    return `${renderLicenseLink(license)}${renderLicenseBadge(license)}`;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # TABLE OF CONTENTS 
    1.) [License](#license)
    2.) [Description](#description)
    3.) [Installation](#installation)
    4.) [Usage](#usage)
    5.) [Contributing](#contributors)
    6.) [Test](#testing)
    7.) [Questions](#question)


  ## LICENSE 
  ${renderLicenseSection(data.license)}
  
  ## DESCRIPTION
  ${data.description}

  ## INSTALLATION
  ${data.installation}
  ## USAGE
  ${data.usage}
  ## CONTRIBUTING
  ${data.contributors}
  ## TEST
  ${data.testing}
  ## QUESTIONS
  If you have any questions about this project, please reach out to me 
  at ${data.email}, or visit my github profile at github.com/${data.username}.
  
`;
}

module.exports = generateMarkdown;
