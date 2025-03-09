# Final Project: UAE Internet History and Digital Transformation

This project showcases the history and evolution of the internet in the UAE, focusing on early ISPs, digital growth, and modern internet technologies. The project is built using Node.js, Express, and EJS for server-side rendering, with data validation and dynamic content loading. The frontend was built using HTML, CSS and Javascript.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [File Descriptions](#file-descriptions)
- [Routes](#routes)
- [Data Validation](#data-validation)

## Installation
   
1. Navigate to the project directory:
    ```bash
    cd final_project
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

## Running the Project

Once dependencies are installed, you can run the project locally using `nodemon` or `node`:

1. Start the server without reloading `node`:
    ```bash
    npm start
    ```

    This will run the server and make the website available on `http://localhost:3000`.

2. Start the server ith reloading `nodemon`:
    ```bash
    npm run dev
    ```
    This will run the server and make the website available with constant updating on `http://localhost:3000`.

3. Open your browser and visit the site:
    ```
    http://localhost:3000
    ```

## Project Structure

This is the structure of the project:
```bash
/final_project
│── /public
│   │── /css
│   │   ├── styles.css        # Main CSS file
│   │── /images               # Stored media files (being images and videos)
│── /views
│   │── /partials
│       │── footer.ejs        #The Generic file template file to illustrate the footer section
│       │── header.ejs        #The Generic file template file to illustrate the header section
│       │── head.ejs          #The Generic file template file to illustrate the head section
│   │── home.ejs              # Main home file for overview
│   │── pageOne.ejs           # First page on Early ISPs page
│   │── pageTwo.ejs           # Second page on Digital Growth
│   │── pageThree.ejs         # Third page on Modern Internet
│── /data
│   │── data.json             # JSON data file
│── /routes
│   │── index.js              # Route handling for all the pages
│── /controllers
│   │── dataController.js     # Handle API Data  fetching & Validation for a more structured and cleaner look
│── server.js                 # Main Node.js/Express file to run server
│── package.json              # Project dependencies & scripts
│── README.md                 # Project documentation  
```

### File Descriptions

- **/public/css/styles.css**: Main CSS file to style the pages.
- **/public/images**: Folder containing all image and video files used in the project.
- **/views**: Contains all EJS templates used to render the web pages.
    - **/partials**: Includes common templates like the header, footer, and head.
    - **home.ejs**: The main homepage for the project, displaying an overview.
    - **pageOne.ejs, pageTwo.ejs, pageThree.ejs**: Separate pages detailing different periods of UAE internet history.
- **/data/data.json**: JSON file containing all the data to be rendered through API Calls.
- **/routes/index.js**: Defines the routes for all pages.
- **/controllers/dataController.js**: Handles fetching and validating JSON data to ensure the integrity of the information.
- **server.js**: Main file to start the Express server.
- **package.json**: Manages project dependencies and scripts.

## Routes

The following routes are available in the project:

- **`/`**: Home page displaying an overview of UAE's internet history.
- **`/page-one`**: Early ISPs and the first steps towards internet adoption in the UAE.
- **`/page-two`**: Digital growth and expansion in the UAE.
- **`/page-three`**: Modern internet and the evolution of digital technologies.

## Data Validation

The data provided in `data.json` is validated server-side before being rendered in the views. This ensures that the JSON structure is correct and the necessary fields are present. 

### Example validation in `dataController.js`:

```javascript
function validateJSON = (data) => {
  return (
    data.home &&
    Array.isArray(data.home.timeline) &&
    data.home.media &&
    data.home.media.etisalatImage &&
    data.pageOne &&
    Array.isArray(data.pageOne.content) &&
    data.pageTwo &&
    Array.isArray(data.pageTwo.content) &&
    data.pageThree &&
    Array.isArray(data.pageThree.content)
  );

const data = getData();
    if (validateJSON(data)) {
        console.log("JSON data  is valid:", data); // Server-side validation success
        res.render('pageThree', { --};
};
```
If the JSON data is invalid, an error message will be displayed on the relevant page to let you know something is wrong
