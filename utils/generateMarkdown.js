// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  let licenseType = data.license;
  let selectedLicense = ''
    if (licenseType === Apache) {
      selectedLicense = `(https://img.shields.io/badge/License-Apache-blue)`
    } else if (licenseType === GNU) {
      selectedLicense = `(https://img.shield.io/badge/License-GNU-orange)`
    } else if (liceseType === ISC) {
      selectedLicense = `(https://img.shield.io/badge/License-ISC-red)`
    } else if (licenseType === MIT) {
      selectedLicense = `(https://img.shield.io/badge/License-MIT-brightgreen)`
    } else if (licenseType === Open) {
      selectedLicense = `(https://shield.io/badge/License-Open-yellow)`
    } else {
      selectedLicense = []
    }
  return selectedLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

module.exports = generateMarkdown;
