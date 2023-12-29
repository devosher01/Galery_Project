# Interactive Image Gallery


This project is an interactive image gallery developed with JavaScript. It allows users to explore various categories of images and select one to view in a larger size. When clicking on an image, it is displayed in an enlarged format along with its name and detailed description.

## Features

### Category Navigation

Users can select a specific category to view only the images associated with that category.

### Image Display

When clicking on an image, it is presented in an enlarged format, accompanied by its name and detailed description.

### Image Data

Each image is associated with data such as a unique ID, a descriptive name, a path, and a detailed description.

## Technologies Used

- **JavaScript:** The project is primarily built with JavaScript. Modules are used to organize the code into separate files, making it easy to maintain and understand.

- **SASS:** SASS, a CSS preprocessor, is used to write styles efficiently and leverage additional features such as variables and nesting.

- **Rollup:** Rollup is used as a module bundler to compile JavaScript files into a single bundle.js file that can be served to the browser.

- **HTML/CSS:** HTML and CSS are used for the structure and style of the page.

## Project Structure

The file and directory structure of the project is as follows:


```
.
├── categorieEvent.js
├── data
│   ├── categories.js
│   └── pictures.js
├── gallery
│   ├── closeGallery.js
│   ├── galleryEvents.js
│   ├── loadPicture.js
│   └── slideClick.js
├── index.js
└── loadCategory.js


```

This modular design allows for efficient code management and facilitates expansion and maintenance.


## Usage Instructions

1. Open the index.html file in your web browser.
2. Explore categories by clicking on the provided links.
3. Within each category, navigate through images using the left and right buttons.
4. Click on thumbnails to view images in a larger size.
5. Close the gallery at any time using the close button.

Enjoy exploring the journey around the world!









