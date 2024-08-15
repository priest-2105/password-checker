div class="container">
        <h1>Password Strength Checker Documentation</h1>

        <h2>Project Overview</h2>
        <p><strong>Project Name:</strong> Password Strength Checker</p>
        <p><strong>Author:</strong> Fawaz Bailey</p>
        <p><strong>Description:</strong> A web-based tool that checks the strength of a password based on predefined
            criteria like length, presence of uppercase letters, lowercase letters, numbers, and special characters. The
            tool provides real-time feedback to users, helping them create strong and secure passwords.</p>

        <h2>Technologies Used</h2>
        <ul>
            <li>HTML5: For structuring the web page.</li>
            <li>CSS3: For styling the web page.</li>
            <li>JavaScript: For adding interactivity and handling password strength logic.</li>
            <li>Bootstrap Icons: For using icons to enhance UI.</li>
            <li>GitHub: For version control and project hosting.</li>
        </ul>

        <h2>File Structure</h2>
        <ul>
            <li><code>index.html</code>: The main HTML file containing the structure of the web page.</li>
            <li><code>style.css</code>: (If separated) Custom styles for the web page.</li>
            <li><code>super.js</code>: The JavaScript file handling password visibility and strength checking.</li>
            <li><code>web-ico.png</code>: The favicon for the web page.</li>
            <li><code>README.md</code>: Project documentation file.</li>
        </ul>

        <h2>Features</h2>
        <ul>
            <li><strong>Password Input Field:</strong> Users can enter a password, which is validated against several
                criteria. Password visibility can be toggled using eye icons.</li>
            <li><strong>Password Strength Indicator:</strong> Real-time feedback is given on password strength. Different
                messages are displayed depending on the strength of the password.</li>
            <li><strong>Password Guidelines:</strong> A popup containing guidelines for creating a strong password appears
                when the information icon is hovered over.</li>
            <li><strong>Footer:</strong> Contains author information and a link to the GitHub profile.</li>
        </ul>

        <h2>Implementation Details</h2>

        <h3>Password Visibility Toggle</h3>
        <p><strong>JavaScript Code:</strong></p>
        <ul>
            <li><code>openPassWordIcon</code> and <code>closePassWordIcon</code> are used to toggle the password input
                field between text and password types.</li>
            <li>Event listeners are attached to handle the visibility toggle.</li>
        </ul>

        <h3>Password Strength Evaluation</h3>
        <p><strong>JavaScript Code:</strong></p>
        <ul>
            <li>The password is evaluated based on its length, presence of uppercase letters, lowercase letters, numbers,
                symbols, and spaces.</li>
            <li>Appropriate feedback is displayed depending on whether the password meets the strength criteria.</li>
        </ul>

        <h3>Strength Level Display</h3>
        <p><strong>JavaScript Code:</strong></p>
        <ul>
            <li>Different strength levels (weak, medium, strong) are displayed as the user types the password.</li>
        </ul>

        <h2>How to Run</h2>
        <ul>
            <li><strong>Clone the repository:</strong></li>
            <code>git clone https://github.com/priest-2105/password-strength-checker.git</code>
            <li><strong>Open the <code>index.html</code> file in a browser to use the Password Strength Checker.</strong></li>
        </ul>

        <h2>Future Improvements</h2>
        <ul>
            <li><strong>Improved UI/UX:</strong> Enhancements to the design and user experience.</li>
            <li><strong>Localization:</strong> Support for multiple languages.</li>
            <li><strong>Accessibility:</strong> Ensure the tool is accessible to users with disabilities.</li>
        </ul>

        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <code>LICENSE.md</code> file for details.</p>

        <div class="footer">
            <p>&copy; Created by <a href="https://github.com/priest-2105" target="_blank">Fawaz Bailey</a>. All rights reserved.</p>
        </div>