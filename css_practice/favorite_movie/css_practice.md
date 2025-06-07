## Analyze and Plan

### Review the HTML:

Create a file called index.html and paste in the following snippet. Here, we have elements like `<h1>` for the movie title, `<p>` for the description, and `<img>` for the movie poster

```
<!DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="UTF-8">

        <title>My Favorite Movie</title>

        <link rel="stylesheet" href="style.css">
  
    </head>

    <body>

        <h1>The Shawshank Redemption</h1>

        <p>This is the greatest movie ever made!  A truly inspiring story of hope and friendship.</p>

        <img src="https://facts.net/wp-content/uploads/2023/06/46-facts-about-the-movie-the-shawshank-redemption-1687241293.jpeg" alt="The Shawshank Redemption movie poster">

    </body>

</html>
```

### Define Styling Goals:

What kind of atmosphere do you want to create for your movie page? 

For a classic film like Shawshank, a vintage or timeless feel might be appropriate.

## Select and Style Elements

Here's where the magic happens! We'll use CSS to style the webpage elements we identified. We'll create a separate CSS file (linked in the HTML) to keep our code organized.

**Create a CSS File:** Create a new file named `style.css` and open it in your code editor.

**Style the Title:** Let's make the movie title stand out. We can target the `<h1>` element using a tag selector and add some styles:

Take a minute to review the CSS snippet: 

```
h1 {

  font-family: 'Georgia', serif; /* Use a serif font for a classic look */

  font-size: 3em;  /* Increase font size */

  text-align: center; /* Center align the title */

}
```

**Style the Paragraph:** We want the description to be easy to read. Let's add some padding and a lighter font color:

```
p {

  padding: 1em;/* Add space around the text */

  color: #666; /* Use a lighter gray color */

  text-align: center; /* Center align the paragraph */

}
```
**Style the Image:** A subtle border around the movie poster can add some definition. Let's also shrink the image and center it:

```
img {

    border: 2px solid #ddd; /* Add a solid gray border */

    display: block; /* Removes bottom margin space if the image is inside inline content. This is needed to center the img */

    margin: 0 auto; /* Centers the image horizontally */

    width: 33.33%; /* Set the width to one-third of the screen */

}
```

## Organize and Test

1. Save your CSS code.
2. Open your HTML file in a web browser: You should now see the styles applied to your webpage!
    * The title should be larger and centered, the description text should be easier to read, and the movie poster should have a border.
3. File Structure: Make sure both **index.html** and **style.css** are within the same folder
    * The **style.css** file location is determined by the `<link>` line within the `<head>` in html: `<link rel="stylesheet" href="style.css">`
4. CSS Line Enders: Make sure all property/value pairs in css end with a semicolon