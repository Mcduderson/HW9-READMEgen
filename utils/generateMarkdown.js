// function to generate markdown for README
function generateMarkdown(data) {
  return `![GitHub license](https://img.shields.io/badge/license-${data.licenseName}-Black.svg)
  # ${data.titleName}

  ## Description
  ${data.descriptionName}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation
  ${data.installName}

  ## Usage
  ${data.usageName}

  ## License
  This application is licensed under the ${data.licenseName} license.

  ## Contributing
  ${data.contriName}

  ## Tests
  ${data.testsName}

  ## Questions
  <a href="https://github.com/${data.gitName}">GitHub Profile</a>
  <br>
  For questions I can be reached at ${data.emailName}
`;
}

module.exports = generateMarkdown;
