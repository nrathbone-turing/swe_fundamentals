# Prompt

Imagine you're working on an online store and need to create visually appealing product cards to showcase your items. 

The provided HTML code includes the structure, but it currently lacks style. Your mission is to use CSS to transform it!

## Analyze and Plan

**Create the HTML file:** Create a file called index.html and paste in the following snippet. Identify the elements you want to style.

```
<!DOCTYPE html>

<html lang="en">

    <head>

        <meta charset="UTF-8">

        <title>Product Card</title>

        <link rel="stylesheet" href="style.css">

    </head>

    <body>

        <div class="product-card">

            <h3>Wireless Headphones</h3>

            <p>Enjoy crystal clear sound with these amazing wireless headphones.</p>

            <p>$99.99</p>

            <img src="https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_UF894,1000_QL80_.jpg" alt="Wireless Headphones">

        </div>

    </body>

</html>
```

**Define Styling Goals:** Determine the desired visual style for your product cards. Consider factors like brand identity, target audience, and the overall user experience you want to create (e.g., clean and modern with a light blue background, informative and engaging with clear headings and readable descriptions).

## Select and Style ELements

**Create a CSS File:** Create a new CSS file (name it `style.css`) and open it in your code editor.

**Style the Product Card:** Using a class selector (e.g., `.product-card`), target the element containing the entire product card. Define styles for properties like:
* `background-color`: Set a light blue background color (e.g., `background-color: #f0f8ff;`).

* `padding`: Add some padding around the content (e.g., `padding: 1em;`).

* `border`: Create a thin border around the card (e.g., `border: 1px solid #ddd;`).

* `margin`: Add some margin between cards (e.g., `margin: 1em;`)

* `width`: Keeps the card at 20% of the screen size. (e.g., `width: 20%;`)

* `box-sizing`: Ensure padding and border are included in the width. (e.g., `box-sizing: border-box;`)

*CSS Snippet:*

```
.product-card {
    background-color: #f0f8ff; /* Light gray background */
    padding: 1em; /* Add space around the content */
    border: 1px solid #ddd; /* Add a thin border */
    margin: 1em; /* Add some margin between cards */
    width: 20%; /* Keeps the card at 20% of the screen size. */
    box-sizing: border-box; /* Ensure padding and border are included in the width */
}
```

**Style the Product Title:** Select the `<h3>` within .product-card element using a tag selector and apply styles to make it stand out:
* `font-weight`: Make the title bold (e.g., `font-weight: bold;`).

* `margin-bottom`: Add some space below the title (e.g., `margin-bottom: 0.5em;`).

*CSS Snippet:*

```
.product-card h3 {
    font-weight: bold; /* Make the title bold */
    margin-bottom: 0.5em; /* Add some space below the title */
}
```

**Style the Description and Price:** Target the `<p>` elements within the .product-card element with a tag selector and ensure they are clear and readable:
* `margin-bottom`: Add some space between paragraphs (e.g., `margin-bottom: 0.25em;`).

*CSS Snippet:*

```
.product-card p {
  margin-bottom: 0.25em; /* Add some space between paragraphs */
}
```

**Style the Image:** Add some visual interest to the product image using the `<img>` selector:
* `width`: Make the image fit the width of the card. (e.g., `width: 100%;`)

* `box-shadow`: Create a subtle drop shadow effect (e.g., `box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);`).

*CSS Snippet:*

```
.product-card img {
    width: 100%; /* Make the image fit the width of the card */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle drop shadow */
}
```

## Organize and Test

1. Save your CSS code.
2. Open the HTML file in a web browser.
    * If your CSS code is correct, you should see a styled product card with a light blue background, borders, spacing, and a drop shadow effect on the image.