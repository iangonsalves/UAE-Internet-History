const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "../data/data.json");

/** Reads the JSON file and parses the data to the data object accordingly */
function getData() {
  const jsonData = fs.readFileSync(jsonFilePath);
  return JSON.parse(jsonData);
}
/** A function used to validate all forms of data present in the RESTFUL API */
function validateJSON(data) {
  return (
    data.home &&
    Array.isArray(data.home.timeline) &&
    data.home.media &&
    data.home.media.etisalatImage &&
    data.home.media.smartInitiative &&
    data.home.media.sharjahInitiative &&
    data.home.media.smartCityDubai &&
    data.home.media.etisalat5GJourney &&
    data.pageOne &&
    Array.isArray(data.pageOne.content) &&
    Array.isArray(data.pageOne.challenges) &&
    data.pageOne.media &&
    data.pageOne.media.gulfNews &&
    data.pageOne.media.broadbandService &&
    data.pageTwo &&
    Array.isArray(data.pageTwo.content) &&
    Array.isArray(data.pageTwo.features) &&
    data.pageTwo.media &&
    data.pageTwo.media.smartCityChart &&
    data.pageTwo.media.busWiFi &&
    data.pageTwo.media.video &&
    data.pageThree &&
    Array.isArray(data.pageThree.content) &&
    Array.isArray(data.pageThree.techAdvancements) &&
    data.pageThree.media &&
    data.pageThree.media.techHubImage &&
    data.pageThree.media.digitalEconomyChart &&
    data.pageThree.media.futureInfrastructure &&
    data.pageThree.media.video
  );
}

exports.getHomePage = (req, res) => {
  const data = getData();
  if (validateJSON(data)) {
    console.log("JSON data  is valid:", data.home); // Server-side validation success
    res.render("home", {
      title: data.home.title,
      summary: data.home.summary,
      timeline: data.home.timeline,
      media: data.home.media,
      conclusion: data.home.conclusion,
      validationError: null, // No error if data is valid
    });
  } else {
    console.error("Invalid JSON structure"); // Server-side validation failure
    res.render("home", {
      title: "",
      summary: "",
      timeline: [],
      media: "",
      conclusion: "",
      validationError: "Invalid JSON data structure.", // Error message shown if invalid
    });
  }
};

exports.getPageOne = (req, res) => {
  const data = getData();
  if (validateJSON(data)) {
    console.log("JSON data  is valid:", data.pageOne); // Server-side validation success
    res.render("pageOne", {
      title: data.pageOne.title,
      content: data.pageOne.content,
      challenges: data.pageOne.challenges,
      media: data.pageOne.media,
      closingStatement: data.pageOne.closingStatement,
      validationError: null, // No error if data is valid
    });
  } else {
    console.error("Invalid JSON structure"); // Server-side validation failure
    res.render("pageOne", {
      title: "",
      content: [],
      challenges: [],
      media: "",
      closingStatement: "",
      validationError: "Invalid JSON data structure.", // Error message shown if invalid
    });
  }
};

exports.getPageTwo = (req, res) => {
  const data = getData();
  if (validateJSON(data)) {
    console.log("JSON data  is valid:", data.pageTwo); // Server-side validation success
    res.render("pageTwo", {
      title: data.pageTwo.title,
      content: data.pageTwo.content,
      features: data.pageTwo.features,
      media: data.pageTwo.media,
      closingStatement: data.pageTwo.closingStatement,
      validationError: null, // No error if data is valid
    });
  } else {
    console.error("Invalid JSON structure"); // Server-side validation failure
    res.render("pageTwo", {
      title: "",
      content: [],
      features: [],
      media: "",
      closingStatement: "",
      validationError: "Invalid JSON data structure.", // Error message shown if invalid
    });
  }
};

exports.getPageThree = (req, res) => {
  const data = getData();
  if (validateJSON(data)) {
    console.log("JSON data  is valid:", data.pageThree); // Server-side validation success
    res.render("pageThree", {
      title: data.pageThree.title,
      content: data.pageThree.content,
      techAdvancements: data.pageThree.techAdvancements,
      media: data.pageThree.media,
      closingStatement: data.pageThree.closingStatement,
      validationError: null, // No error if data is valid
    });
  } else {
    console.error("Invalid JSON structure"); // Server-side validation failure
    res.render("pageThree", {
      title: "",
      content: [],
      techAdvancements: [],
      media: "",
      closingStatement: "",
      validationError: "Invalid JSON data structure.", // Error message shown if invalid
    });
  }
};
