// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseType = license;
  let selectedLicense  
    if (licenseType === 'Apache') {
      selectedLicense = `![Apache](https://img.shields.io/badge/License-Apache-blue)`
    } else if (licenseType === 'GNU') {
      selectedLicense = `![GNU](https://img.shields.io/badge/License-GNU-orange)`
    } else if (licenseType === 'ISC') {
      selectedLicense = `![ISC](https://img.shields.io/badge/License-ISC-red)`
    } else if (licenseType === 'MIT') {
      selectedLicense = `![MIT](https://img.shields.io/badge/License-MIT-brightgreen)`
    } else {
      selectedLicense = []
    }
  return selectedLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let selectedLicense  
    if (licenseType === 'Apache') {
      selectedLicense = `[Apache](https://www.apache.org/licenses/)`
    } else if (licenseType === 'GNU') {
      selectedLicense = `[GNU](https://choosealicense.com/licenses/gpl-3.0/)`
    } else if (licenseType === 'ISC') {
      selectedLicense = `[ISC](https://choosealicense.com/licenses/isc/)`
    } else if (licenseType === 'MIT') {
      selectedLicense = `[MIT](https://choosealicense.com/licenses/mit/)`
    } else {
      selectedLicense = []
    }
  return selectedLicense;
};

module.exports = {renderLicenseBadge, renderLicenseLink};