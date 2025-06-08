## Pseudocode: Personal Website Summative Lab

### HTML Structure

```
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <title>Nick Rathbone - Portfolio</title>

    <!-- Link to CSS stylesheet file -->
        <link rel="stylesheet" href="styles.css" />
    </head>

    <body>

    <!-- Header Section -->
        <header>
            <!-- Your name -->
            <h1>Nick Rathbone</h1>

            <!-- GitHub link -->
            <a href="https://github.com/nrathbone-turing/swe_fundamentals" target="_blank">SWE Fundamentals Github Repo</a>
        </header>
    <main>
        <!-- About Me Section -->
            <section id="about">
                <h2>About Me</h2>
                <p>I come from a support leadership role where I spent a lot of time bridging feedback to product and engineering. I realized I wanted to go beyond surface fixes and learn to build systemic solutions myself, so I joined my company’s internal apprenticeship program and enrolled in the Turing and Flatiron School bootcamps. I’m especially excited about applying what I know about UX pain points for internal and external users, as well as how to find and address edge cases, to my future of building more resilient tools.</p>
                <h3>Skills</h3>
                <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <!-- Placeholder for more skills to add in the future -->
                </ul>
            </section>

        <!-- Projects Section -->
            <section id="projects">
                <h2>Projects</h2>

                <!-- Project 1 -->
                    <div class="project">

                        <!-- GitHub link -->
                        <a href="https://github.com/nrathbone-turing/swe_fundamentals/tree/main/summative_lab_1" target="_blank">
                            <h3>Calculator Project</h3>
                        </a>
                        
                        <!-- Image of a calculator -->
                        <img src="https://c7.alamy.com/comp/2G2J1TM/isolated-basic-calculator-for-kids-on-white-background-flat-image-cute-calculator-with-a-solar-cell-white-body-color-blue-buttons-2G2J1TM.jpg" alt="Cartoon calculator with a solar cell, white body color, and blue buttons" />
                        
                        <p>A simple calculator that performs basic operations and tracks its calculation history.</p>
                    </div>

                <!-- Project 2 -->
                    <div class="project">

                        <!-- GitHub link -->
                        <a href="https://github.com/nrathbone-turing/swe_fundamentals/tree/main/summative_lab_1" target="_blank">
                            <h3>Personal Website Project</h3>
                        </a>
                        
                        <!-- Image of a designer/website -->
                        <img src="designer_image.jpg" alt="Cartoon image of programmer, engineering and coding a website on augmented reality interface screens." />
                        
                        <p>A personal website to highlights skills and projects, providing a platform for others to learn more about me as a developer.</p>
                    </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2025 Nick Rathbone</p>
        </footer>

    </body>

</html>
```

### CSS Structure

```
/* style.css */

/* Global Styles */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f6fa;
    color: #333;
}

/* Header Section */

header {
    background-color: #3b4c63;
    color: white;
    text-align: center;
    padding: 1.5em 0;
}

header a {
    color: #ffcc00;
    text-decoration: none;
    display: block;
    margin-top: 0.5em;
}

/* About Section */

#about {
    padding: 2em;
    background-color: #e9eef5;
}

#about h2 {
    margin-top: 0;
}

#about ul {
    list-style-type: square;
    padding-left: 1.5em;
}

/* Projects Section */

#projects {
    padding: 2em;
    background-color: #ffffff;
}

#projects h2 {
    text-align: center;
}

.project {
    background-color: #f9fbfe;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1em;
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.05);
}

.project img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin: 1em 0;
}

/* Responsive Grid */

#projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
}

/* Footer */

footer {
    background-color: #3b4c63;
    color: white;
    text-align: center;
    padding: 1em 0;
    margin-top: 2em;
}
```