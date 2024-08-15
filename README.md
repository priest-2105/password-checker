# Password Strength Checker Documentation

## Project Overview

- **Project Name:** Password Strength Checker
- **Author:** Fawaz Bailey
- **Description:** A web-based tool that checks the strength of a password based on predefined criteria like length, presence of uppercase letters, lowercase letters, numbers, and special characters. The tool provides real-time feedback to users, helping them create strong and secure passwords.

## Technologies Used

- **HTML5:** For structuring the web page.
- **CSS3:** For styling the web page.
- **JavaScript:** For adding interactivity and handling password strength logic.
- **Bootstrap Icons:** For using icons to enhance UI.
- **GitHub:** For version control and project hosting.

## File Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `style.css`: (If separated) Custom styles for the web page.
- `super.js`: The JavaScript file handling password visibility and strength checking.
- `web-ico.png`: The favicon for the web page.
- `README.md`: Project documentation file.

## Features

- **Password Input Field:** Users can enter a password, which is validated against several criteria. Password visibility can be toggled using eye icons.
- **Password Strength Indicator:** Real-time feedback is given on password strength. Different messages are displayed depending on the strength of the password.
- **Password Guidelines:** A popup containing guidelines for creating a strong password appears when the information icon is hovered over.
- **Footer:** Contains author information and a link to the GitHub profile.

## Implementation Details

### Password Visibility Toggle

- **JavaScript Code:**
  - `openPassWordIcon` and `closePassWordIcon` are used to toggle the password input field between text and password types.
  - Event listeners are attached to handle the visibility toggle.

### Password Strength Evaluation

- **JavaScript Code:**
  - The password is evaluated based on its length, presence of uppercase letters, lowercase letters, numbers, symbols, and spaces.
  - Appropriate feedback is displayed depending on whether the password meets the strength criteria.

### Strength Level Display

- **JavaScript Code:**
  - Different strength levels (weak, medium, strong) are displayed as the user types the password.

## How to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/priest-2105/password-strength-checker.git
