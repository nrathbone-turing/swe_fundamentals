# Prompt

**Scenario:** Imagine you are a junior web developer working for a digital marketing agency. Your team has been tasked with creating a blog section for a client’s website. The blog post layout should include a title, an image, and a summary of the article. The layout must be responsive and adapt to different screen sizes, ensuring a seamless reading experience on desktops, tablets, and mobile devices.

**Objective:** By the end of this practice, you will be able to create a responsive blog post layout using CSS Flexbox. You will plan the layout, choose the appropriate layout method, define layout styles, style individual elements, and test and refine your code to ensure responsiveness.

## Step 1: Plan the Layout

**Define Content Structure:** Create an HTML file (`index.html`) with the following structure:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog Post</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="blog-post">
        <img src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg" alt="Blog Image">
        <div class="blog-content">
            <h2>Blog Post Title</h2>
            <p>This is a summary of the blog post. It gives readers an overview of the content and entices them to read more.</p>
        </div>
    </div>
</body>
</html>
```

## Step 2: Choose a Layout Method

**Evaluate Options:** Flexbox is chosen for its simplicity in creating responsive layouts with flexible arrangements.
**Select the Best Fit:** Use Flexbox for a single-axis layout (horizontal on larger screens and vertical on smaller screens).

## Step 3: Define Layout Styles

**Create a CSS file** called `style.css` and write your css there.

**Target the following Container Elements:**
* Select `.blog-post` and give it a property of `display` and set it to `flex`.
* Add `flex-wrap` property and set it to `wrap`.
* Set a `border` with `1px solid #ddd`.
* Add `padding` of `1em`.
* Set `margin` to `1em auto`.
* Set `width` to `800px`.
* Add a `box-shadow` with `0 4px 8px rgba(0,0,0,0.1)`.
* Give it a `border-radius` of `8px`.

**Style the Image:**
* Select `.blog-post img` and set `flex` to `1 1 40%`.
* Set `width` to `100%`.
* Add `padding` of `0.5em`.
* Set `object-fit` to `cover`.
* Give it a `border-radius` of `8px 0 0 8px`.

**Style the Blog Content:**
* Select `.blog-content` and set `flex` to `1 1 60%`.
* Add `padding` of `0.5em`.
* Give it a `border-radius` of `0 8px 8px 0`.

## Step 4: Style Individual Elements

**Refine Element Positioning:**
* Select `.blog-content h2` and set `margin-bottom` to `0.5em`.
* Select `.blog-content p` and set `line-height` to `1.5`.

## Step 5: Test and Refine

1. Validate in Browser: Open `index.html` in a web browser to see how the layout looks.
2. Iterate and Adjust: Use developer tools to inspect elements and make adjustments to spacing, alignment, or responsiveness.