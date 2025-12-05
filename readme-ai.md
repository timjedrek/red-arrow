<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">flyredarrow.com Website</h1>
</p>
<p align="center">
    <em>Elevating Web Development with Open Source Magic!</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=default&logo=Firebase&logoColor=black" alt="Firebase">
	<img src="https://img.shields.io/badge/Astro-FF5D01.svg?style=default&logo=Astro&logoColor=white" alt="Astro">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=default&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Swiper-6332F6.svg?style=default&logo=Swiper&logoColor=white" alt="Swiper">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

This repository contains the source code for the official website of Red Arrow Flight Academy (flyredarrow.com), a flight school located at Doña Ana County International Jetport (KDNA) in Santa Teresa, New Mexico. The website is built with the Astro framework and features a modern, responsive design.

Red Arrow Flight Academy offers a variety of flight training programs, including:

*   Private Pilot
*   Instrument Rating
*   Commercial Pilot
*   Certified Flight Instructor (CFI)
*   Certified Flight Instructor Instrument (CFII)

The academy also provides specialized training for military personnel and supports non-U.S. citizens with M-1 student visa applications.

The website is a comprehensive web application that showcases a seamless integration of MDX, sitemap, Tailwind CSS, icons, React, Alpine.js, Partytown, and Node.js. The project's core functionalities revolve around defining site configuration, handling API requests, and orchestrating backend operations through `index.js`. This central backend file plays a critical role in facilitating smooth communication with external services and databases, ensuring efficient data processing and delivery for the frontend components. Additionally, the project leverages Firebase for hosting management, resource optimization, and Cloud Functions deployment, separating frontend and backend responsibilities to enhance overall performance.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project utilizes Astro with integrations like MDX, sitemap, Tailwind CSS, icons, React, Alpine.js, Partytown, and Node. It separates frontend and backend deployments efficiently for performance optimization. |
| 🔩 | **Code Quality**  | The codebase follows best practices with well-structured code and consistent style. Prettier is used for code formatting, ensuring uniformity across the project. |
| 📄 | **Documentation** | The repository includes detailed configuration files for Astro, Firebase, and package management. Extensive inline documentation clarifies the purpose and functionality of different files and features. |
| 🔌 | **Integrations**  | Key integrations include Firebase (hosting and functions), React, Tailwind CSS, and several icon libraries. The project heavily relies on these integrations for functionality and styling. |
| 🧩 | **Modularity**    | The codebase exhibits modularity with separate configuration files for different technologies. Components are logically organized, promoting code reusability and easy maintenance. |
| 🧪 | **Testing**       | Testing frameworks and tools like Firebase Functions Test are used for backend testing. The project maintains a testing suite to ensure reliability and stability of backend functions. |
| ⚡️  | **Performance**   | The project leverages Node adapter settings for Astro, optimizing resource allocation. Cloud Functions region settings in Firebase ensure efficient resource utilization. |
| 🛡️ | **Security**      | Firebase security features are utilized for data protection. Access control measures are implemented through Firebase functions and runtime configurations. |
| 📦 | **Dependencies**  | Key dependencies include various technologies like React, TypeScript, Tailwind CSS, and Firebase. These libraries form the core foundation of the project. |
| 🚀 | **Scalability**   | The project exhibits scalability by separating frontend and backend deployments. Cloud Functions region settings and efficient resource allocation facilitate scalability for increased load. |

---

##  Repository Structure

```sh
└── \Users\asus\OneDrive\Desktop\projects\red-arrow/
    ├── astro.config.mjs
    ├── firebase.json
    ├── functions
    │   ├── .gitignore
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    ├── markdown-style-guide.md
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── (contains static assets like images, fonts, and documents)
    ├── README.md
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── consts.ts
    │   ├── content
    │   ├── data
    │   ├── courses.js
    │   ├── fleet.js
    │   ├── pplProcess.js
    │   ├── reviews.js
    │   ├── simulators.js
    │   └── team.js
    │   ├── env.d.ts
    │   ├── firebase
    │   ├── layouts
    │   ├── pages
    │   └── styles
    ├── tailwind.config.mjs
    └── tsconfig.json
```

---

##  Modules

<details closed><summary>.</summary>

| File                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                        | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [astro.config.mjs](astro.config.mjs)       | Defines configuration for Astro to integrate MDX, sitemap, Tailwind CSS, icons, React, Alpine.js, Partytown, and Node. Specifies site URL, sitemap filters, URL redirects, output, and Node adapter settings for the Fly Red Arrow website.                                                                                                                                                                                                                                                                                                  |
| [firebase.json](firebase.json)             | Specifies hosting source, ignores files, sets Cloud Functions region, and defines runtime. Separates frontend and backend deployments, optimizing resource allocation and enhancing performance.                                                                                                                                                                                                                                                                                                                                             |
| [package-lock.json](package-lock.json)     | This code file, `index.js`, within the `functions` directory of the repository, serves as the main entry point for backend functions in the project. It encapsulates logic for handling various API requests and executing server-side operations, ensuring seamless communication with external services and databases. By orchestrating these functions, `index.js` plays a pivotal role in maintaining the backend functionality of the application, ultimately enabling robust data processing and delivery for the frontend components. |
| [package.json](package.json)               | Defines project metadata and dependencies for the Red Arrow repository, enabling Astro framework usage, React components, Tailwind CSS, and Firebase integration. Facilitates development, building, and previewing of the website with diverse tools and libraries.                                                                                                                                                                                                                                                                         |
| [tailwind.config.mjs](tailwind.config.mjs) | Enhances Tailwind CSS theme with custom colors and background images for various sections of the website, specifies dynamic height values, defines keyframes for animations, adds custom font family, and includes plugins for typography and form styles.                                                                                                                                                                                                                                                                                   |
| [tsconfig.json](tsconfig.json)             | Defines strict TypeScript compiler options for React JSX usage in the project, extending a base configuration.                                                                                                                                                                                                                                                                                                                                                                                                                               |

</details>

<details closed><summary>functions</summary>

| File                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                              | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [index.js](functions\index.js)                   | Implements a Firebase Cloud Function to grant admin privileges securely. Verifies admin status and adds custom claims to user profile for the given email. Enhances system security and access control for the application.                                                                                                                                                                                                                                    |
| [package-lock.json](functions\package-lock.json) | The code file `functions/index.js` serves as the main entry point for backend server functions in the `red-arrow` repository. It encapsulates critical business logic and API endpoints, handling data processing and interactions with external services. This code file plays a pivotal role in ensuring seamless communication between the frontend and backend components of the project, enabling the implementation of key features and functionalities. |
| [package.json](functions\package.json)           | Enables local development, testing, deployment, and logging for Firebase Cloud Functions. Manages dependencies, defines scripts for emulators, deployment, and logs, ensuring seamless integration with Firebase services.                                                                                                                                                                                                                                     |

</details>

<details closed><summary>public</summary>

| File                            | Summary                                                                                                                                                            |
| ---                             | ---                                                                                                                                                                |
| [robots.txt](public\robots.txt) | Restricts access to specific pages for search engines, allowing root access. Includes a sitemap reference. Maintains SEO and privacy controls for flyredarrow.com. |

</details>

<details closed><summary>src</summary>

| File                       | Summary                                                                                                                                                                                                            |
| ---                        | ---                                                                                                                                                                                                                |
| [consts.ts](src\consts.ts) | Defines global data for Red Arrow Flight Academy site including SEO info, NAP details, flight programs, resources, and about section. Facilitates easy access and utilization of this data throughout the website. |
| [env.d.ts](src\env.d.ts)   | Defines environment variables for Firebase authentication and form webhook URLs, enabling secure access to sensitive information and integration with web forms in the project.                                    |

</details>

<details closed><summary>src.components</summary>

| File                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Banner.astro](src\components\Banner.astro)                               | Enables dynamic content and user authentication handling in the Banner component. Renders contact details, social links, and enrollment CTA, adapting based on user login status. Integrates Firebase auth for seamless login/logout transitions within the Red Arrow Flight Academy website.                                                                                                                                                                                                                            |
| [BaseHead.astro](src\components\BaseHead.astro)                           | Defines global metadata for web pages, handling custom titles, descriptions, images, and keywords. Includes Open Graph and Twitter tags, Google tag integration, and schema for a local business. Enhances SEO and social sharing for Red Arrow Flight Academys content across various platforms.                                                                                                                                                                                                                        |
| [BlogHeader.astro](src\components\BlogHeader.astro)                       | Implements blog header layout with Banner and BlogNavbar components for pathname navigation handling.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [BlogNavbar.jsx](src\components\BlogNavbar.jsx)                           | Manages navigation for Red Arrows blog, implementing a responsive navbar with submenu toggling and a sticky effect on scroll. Facilitates easy access to flight programs, resources, and about sections, enhancing user experience.                                                                                                                                                                                                                                                                                      |
| [ContactUs.astro](src\components\ContactUs.astro)                         | Creates a Contact Us section with location details, contact information, and operating hours. Implements a dynamic background styling adjustment for Safari browsers, enhancing user interaction on the Red Arrow flight academy website.                                                                                                                                                                                                                                                                                |
| [ContactUsForm.astro](src\components\ContactUsForm.astro)                 | Embeds an interactive JotForm for capturing user information. Promotes seamless user engagement on web platforms.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [DiscoveryFlightCTA.astro](src\components\DiscoveryFlightCTA.astro)       | Promotes Red Arrows flight experiences through a visually striking call-to-action section. Encourages users to book a Discovery Flight, enticing them to explore pilot training opportunities. Designed to capture interest and drive conversions effectively within the websites architecture.                                                                                                                                                                                                                          |
| [DiscoveryForm.astro](src\components\DiscoveryForm.astro)                 | This code file, `index.js`, serves as the main entry point for the backend functions in the red-arrow repository. It contains critical logic for handling various server-side operations and functionalities. This code file plays a crucial role in managing the backend processes and interactions within the larger architecture of the project.                                                                                                                                                                      |
| [DiscoveryForm2.astro](src\components\DiscoveryForm2.astro)               | This code file in the `functions` directory of the repository is crucial for managing backend server logic and functionality. It plays a pivotal role in handling various server-side operations, such as processing data and executing important tasks for the web application. Its implementation is integral to the overall architecture of the parent repository, ensuring seamless operations for the applications backend services.                                                                                |
| [EnrollmentForm.astro](src\components\EnrollmentForm.astro)               | Enables enrollment at Red Arrow Flight Academy via an embedded form. Allows geolocation, microphone, camera, and payment options. Seamless user experience for prospective students.                                                                                                                                                                                                                                                                                                                                     |
| [EnrollNowCTA.astro](src\components\EnrollNowCTA.astro)                   | Promotes enrollment in training programs by featuring a captivating call-to-action section with a sleek design and persuasive messaging. Encourages visitors to take action by registering for courses, driving engagement and conversion on the site.                                                                                                                                                                                                                                                                   |
| [FinancingTabs.jsx](src\components\FinancingTabs.jsx)                     | Code SummaryThis code file, `index.js`, in the `functions` directory of the repository plays a critical role in managing server-side functionalities for the web application. It handles the backend logic, such as processing user requests, executing database operations, and interfacing with external services. By orchestrating these tasks, the code ensures smooth interactions between the client-side interface and the backend systems, maintaining the applications responsiveness and reliability.          |
| [FleetCard.astro](src\components\FleetCard.astro)                         | Renders detailed information and an image for a specific aircraft model.-Converts camelCase keys into human-readable titles for display.-Displays aircraft stats and provides a booking link for interested users.                                                                                                                                                                                                                                                                                                       |
| [FlightOption.astro](src\components\FlightOption.astro)                   | Displays a customizable flight option card with image, title, description, and additional notes. Supports layout reversal. Synergizes with the parent repositorys web application architecture for enhancing the user experience.                                                                                                                                                                                                                                                                                        |
| [FlightTeamMember.astro](src\components\FlightTeamMember.astro)           | Showcases** detailed team member profiles with images, bio, and contact info.-**Enhances** user engagement by presenting team members in a visually appealing and informative manner.-**Promotes** team cohesion and professionalism within the project’s web interface.                                                                                                                                                                                                                                                 |
| [Footer.astro](src\components\Footer.astro)                               | Displays the footer content component for the website.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [FooterContent.astro](src\components\FooterContent.astro)                 | This code file in the `functions` directory plays a crucial role in the repositorys architecture by serving as the backend logic for the project. It defines the main functions and API endpoints that interact with external services, enabling smooth communication between the frontend and backend components. The file is responsible for handling various tasks such as data processing, authentication, and integration with third-party services, ultimately ensuring the seamless operation of the application. |
| [FooterHome.astro](src\components\FooterHome.astro)                       | Renders the footer content for the home page using a separate component, promoting modular design and reusability for a cohesive user experience in the web application.                                                                                                                                                                                                                                                                                                                                                 |
| [FormattedDate.astro](src\components\FormattedDate.astro)                 | Formats a date into a user-friendly display using short month names, year, and day in the `FormattedDate` component.                                                                                                                                                                                                                                                                                                                                                                                                     |
| [GuideDownload.astro](src\components\GuideDownload.astro)                 | Highlights how the GuideDownload component promotes a free pilot training guide at Red Arrow Flight Academy. Encourages users to access the booklet for insights on obtaining a pilot certificate, featuring a visually appealing mockup and a call-to-action button for instant access.                                                                                                                                                                                                                                 |
| [Header.astro](src\components\Header.astro)                               | Generates dynamic content and handles navigation for the website header, integrating the Banner and Navbar components based on the current URL path.                                                                                                                                                                                                                                                                                                                                                                     |
| [InternationProgramSteps.jsx](src\components\InternationProgramSteps.jsx) | Displays a multi-step guide for international program enrollment using a Swiper component. Guides users through application, visa acquisition, TSA requirements, and travel arrangements seamlessly. Highlighted steps include form submissions, payment processing, embassy appointments, and TSA course enrollment details for Red Arrow Flight Academy programs.                                                                                                                                                      |
| [Location.astro](src\components\Location.astro)                           | Illustrates the Red Arrow Flight Academys location page, presenting key details about its location and services. Utilizes conditional styling based on a specified background color to enhance visual appeal. Prominently features a Google Maps embedded view and descriptive text.                                                                                                                                                                                                                                     |
| [MobileNavBar.jsx](src\components\MobileNavBar.jsx)                       | Navigates mobile navigation links based on current path, toggling open/close state for specific menu items. Utilizes React state to manage dropdown functionality efficiently.                                                                                                                                                                                                                                                                                                                                           |
| [MobileNavLink.jsx](src\components\MobileNavLink.jsx)                     | Enables dynamic rendering of mobile navigation links based on active pathname, with expand/collapse functionality. Displays submenu items with interactive icons and styles based on active status and user toggle.                                                                                                                                                                                                                                                                                                      |
| [Navbar.jsx](src\components\Navbar.jsx)                                   | Manages navigation behavior and appearance based on user interaction and scrolling. Implements responsive design, dropdown menus, and mobile menu functionality, enhancing the user experience on the website.                                                                                                                                                                                                                                                                                                           |
| [NavLink.jsx](src\components\NavLink.jsx)                                 | Enables interactive navigation menu highlighting active links based on current page. Supports expandable submenu items for improved user experience. Contributing to seamless navigation within the web application.                                                                                                                                                                                                                                                                                                     |
| [OpenModalButton.jsx](src\components\OpenModalButton.jsx)                 | Enables users to download a free guide by presenting a modal form with submission handling. Users enter name, phone, and email, triggering post submission actions. Toggle button controls the modal display. Supports form validation and submission success messaging.                                                                                                                                                                                                                                                 |
| [Partners.astro](src\components\Partners.astro)                           | Illustrates proud partnerships in a visually appealing layout showcasing logos of key entities. Enhances the repositorys visual appeal and promotes affiliations with notable organizations.                                                                                                                                                                                                                                                                                                                             |
| [PplProcess.jsx](src\components\PplProcess.jsx)                           | Organizes** PPL process steps for user interaction. **Toggles** steps with onClick events, showing details on demand. **Renders** dynamic content based on state and user actions within the parent repositorys React architecture.                                                                                                                                                                                                                                                                                      |
| [PplStep.jsx](src\components\PplStep.jsx)                                 | Enables toggling step details with a dynamic icon for expanding and collapsing content. Supports a user-friendly interface for step-by-step navigation within the React application.                                                                                                                                                                                                                                                                                                                                     |
| [QuizCTA.astro](src\components\QuizCTA.astro)                             | Showcases dynamic quiz section design with conditional styling. Drives user engagement to discover their pilot potential. Encourages quiz participation and visits to Red Arrow Flight Academy. Built using React icons and Tailwind CSS for responsive, visually appealing layout.                                                                                                                                                                                                                                      |
| [Reviews.jsx](src\components\Reviews.jsx)                                 | Displays rotating student reviews with star ratings, offering a dynamic showcase of positive feedback. Uses continuous animation for a visually engaging user experience.                                                                                                                                                                                                                                                                                                                                                |
| [ScheduleCallCTA.astro](src\components\ScheduleCallCTA.astro)             | Enables users to schedule a call for flight training discussions. Prominently features CTA button and social media links for engagement. Designed with a visually appealing layout to drive user interaction and follow-ups.                                                                                                                                                                                                                                                                                             |
| [Section.astro](src\components\Section.astro)                             | Defines a flexible layout component with customizable background styling. Supports conditional rendering for reversed layout and red-themed styling. Ideal for structuring dynamic content sections with image, content, and optional application form slots.                                                                                                                                                                                                                                                            |
| [SimulatorCard.astro](src\components\SimulatorCard.astro)                 | Illustrates a dynamic simulator card UI for a flight academy website. Displays simulator details, panels, usage scenarios, and rental price, with a Book Now button. The layout includes an image, play icon, and simulator name for an interactive user experience.                                                                                                                                                                                                                                                     |
| [StudentLogin.astro](src\components\StudentLogin.astro)                   | Enhances student login experience by presenting a visually appealing, responsive interface; fosters engagement through a well-structured design, establishing a seamless login process within the parent repositorys architecture.                                                                                                                                                                                                                                                                                       |
| [StudentNavbar.jsx](src\components\StudentNavbar.jsx)                     | Implements a dynamic student navigation bar for the Red Arrow project. Toggle mobile menu visibility on hamburger icon click. Built with React, it enhances user experience by providing easy access to site navigation on both desktop and mobile platforms.                                                                                                                                                                                                                                                            |
| [TeamMemberCard.astro](src\components\TeamMemberCard.astro)               | Displays team member information with image, name, title, and bio paragraphs. Includes contact details such as email and phone number. Styled with a gradient background, rounded borders, and flex layout for responsive design.                                                                                                                                                                                                                                                                                        |
| [Timeline.astro](src\components\Timeline.astro)                           | The code file at `\Users\asus\OneDrive\Desktop\projects\red-arrow/functions/index.js` plays a crucial role in the Red Arrow projects architecture. It serves as the main entry point for the projects backend functionality, handling various server-side operations and logic. This file is responsible for orchestrating the different functions of the application, enabling seamless communication between the frontend and backend components.                                                                      |
| [TrainingCourseCard.astro](src\components\TrainingCourseCard.astro)       | Showcases a Training Course Card component that displays an image, description, and link. Enables users to interact by clicking on the card for more information. Located in src\components within a larger project repository structure.                                                                                                                                                                                                                                                                                |
| [TrainingCourseList.jsx](src\components\TrainingCourseList.jsx)           | Provides interactive training course list with details on selected course. Renders course cards with images and titles, allowing users to explore content. Displays expanded view on course selection, showcasing banner, details, and enrollment link. Facilitates easy navigation and engagement for prospective students.                                                                                                                                                                                             |

</details>

<details closed><summary>src.content</summary>

| File                               | Summary                                                                                                                                                                                                                                |
| ---                                | ---                                                                                                                                                                                                                                    |
| [config.ts](src\content\config.ts) | Defines a collection for blog content with specified schema for metadata fields, ensuring type safety and coercion for dates. This configuration facilitates structured content management within the parent repositorys architecture. |

</details>

<details closed><summary>src.firebase</summary>

| File                                | Summary                                                                                                                                                                                                                                        |
| ---                                 | ---                                                                                                                                                                                                                                            |
| [client.ts](src\firebase\client.ts) | Creates Firebase app and storage configuration for Red Arrow user authentication, providing references to storage and files.                                                                                                                   |
| [server.ts](src\firebase\server.ts) | Establishes Firebase server configuration using environment variables for security. Initializes Firebase app if not active, utilizing service account details for authentication and client communication within the repositorys architecture. |

</details>

<details closed><summary>src.layouts</summary>

| File                                                   | Summary                                                                                                                                                                                                                                                                               |
| ---                                                    | ---                                                                                                                                                                                                                                                                                   |
| [BaseLayout.astro](src\layouts\BaseLayout.astro)       | Defines a standard layout structure with Head, Header, and Footer components for web pages. Manages SEO and content metadata, enhancing user experience and maintainability across the application.                                                                                   |
| [BlogLayout.astro](src\layouts\BlogLayout.astro)       | Implements a blog layout with head, header, and footer components to structure blog content in the parent repository.                                                                                                                                                                 |
| [BlogPost.astro](src\layouts\BlogPost.astro)           | Displays blog post details using a custom layout, showcasing title, author, reading time, publication date, and hero image. Designed to enhance the presentation and readability of blog content within the larger repository architecture.                                           |
| [HomeLayout.astro](src\layouts\HomeLayout.astro)       | Defines layout structure for the homepage with header, footer, and dynamic content slots based on metadata. Incorporates styling and SEO-friendly elements for a seamless user experience.                                                                                            |
| [StudentLayout.astro](src\layouts\StudentLayout.astro) | Orchestrates layout structure, integrating components for student-centric pages through BaseHead metadata, StudentNavbar interactive navigation, and FooterHome closing elements. Employs scrolling smoothness and urbanist font with dynamic content injection based on Astro props. |

</details>

<details closed><summary>src.pages</summary>

| File                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [404.astro](src\pages\404.astro)                                         | Displays custom 404 error page styled within BlogLayout, reinforcing Red Arrow Flight Academy branding. Provides a user-friendly message with a visual checkmark icon and prompts users to navigate to the homepage. Maintains consistency with the sites design and layout.                                                                                                                                                                                                                                                                                                                            |
| [500.astro](src\pages\500.astro)                                         | Defines a 500 Server Error page layout with a main header, error message, and home button within Red Arrow Flight Academys blog site. Displayed content includes a visually appealing check mark icon and guidance for users to refresh or return later.                                                                                                                                                                                                                                                                                                                                                |
| [contact-confirmation.astro](src\pages\contact-confirmation.astro)       | Displays a confirmation message post-contact submission at Red Arrow Flight Academy. Includes contact info, gratitude message, and a link to the homepage. Maintains consistent styling with the BlogLayout template for a seamless user experience.                                                                                                                                                                                                                                                                                                                                                    |
| [dashboard.astro](src\pages\dashboard.astro)                             | This code file, `index.js`, in the `functions` directory of the `red-arrow` repository, serves as the backend logic for handling various API endpoints and serverless functions. It integrates closely with the Firebase project configuration and is essential for managing data and processing server-side requests within the applications architecture.                                                                                                                                                                                                                                             |
| [discovery-confirmation.astro](src\pages\discovery-confirmation.astro)   | Creates a confirmation page for booking sessions with Red Arrow Flight Academy. Displays a thank you message, contact details, and a home button. Intended to provide a seamless user experience post-booking.                                                                                                                                                                                                                                                                                                                                                                                          |
| [discovery-flight-form.astro](src\pages\discovery-flight-form.astro)     | Generates a form for booking discovery flights at Red Arrow Flight Academy. Sets page metadata and displays a form via JotForm for flight requests. Facilitates contact with a Red Arrow team member to guide users through the flight booking process.                                                                                                                                                                                                                                                                                                                                                 |
| [enrollment-confirmation.astro](src\pages\enrollment-confirmation.astro) | Generates enrollment confirmation message with contact details and home link in a visually appealing layout. Incorporated within the Red Arrow Flight Academy website structure for informing and engaging users post-enrollment.                                                                                                                                                                                                                                                                                                                                                                       |
| [enrollment.astro](src\pages\enrollment.astro)                           | Sets up enrollment form page at Red Arrow Flight Academy with key details and submission form.-Initiates enrollment process for aspiring pilots and guides them through registration.-Includes relevant metadata for search optimization.                                                                                                                                                                                                                                                                                                                                                               |
| [forgot-your-password.astro](src\pages\forgot-your-password.astro)       | Implements a password reset feature for student accounts. Displays success message upon email submission. Handles form submission to trigger password reset email using Firebase Auth. Displays error message if reset fails.                                                                                                                                                                                                                                                                                                                                                                           |
| [index.astro](src\pages\index.astro)                                     | This code file, `index.js`, in the `functions` directory of the repository serves as the main backend logic for handling various serverless functions in the project. It orchestrates the communication between the frontend and external services, managing data processing, authentication, and other critical tasks. The functionalities implemented here are integral to the overall functionality and performance of the application, supporting a seamless user experience.                                                                                                                       |
| [pending-students.astro](src\pages\pending-students.astro)               | Enables real-time management of pending students, displaying their names and emails dynamically. Admins can add and remove students securely using Firebase authentication. The code also generates navigation tabs based on user roles for easy access to different sections of the application.                                                                                                                                                                                                                                                                                                       |
| [privacy-policy.astro](src\pages\privacy-policy.astro)                   | This code file, `index.js`, within the `functions` directory of the `red-arrow` repository, serves as the entry point for handling server-side logic and Cloud Functions for Firebase. It plays a critical role in orchestrating backend functionalities such as authentication, database interactions, and other server-side operations to support the overall functionality of the web application. Its main purpose is to manage and execute various server-side tasks, ensuring seamless integration with Firebase services and enabling dynamic backend operations to enhance the user experience. |
| [quiz-confirmation.astro](src\pages\quiz-confirmation.astro)             | Displays a confirmation message after submitting a Pilot Readiness Quiz, reassuring users of a prompt response. Includes contact details and a link back to the homepage. Maintains consistency with the repositorys architectural structure and styling.                                                                                                                                                                                                                                                                                                                                               |
| [quiz.astro](src\pages\quiz.astro)                                       | Code File SummaryThis code file, `index.js`, within the `functions` directory of the `red-arrow` repository, serves as the main entry point for serverless functions related to the Red Arrow Flight Academy project. It integrates with Firebase services and handles backend logic for functions such as user authentication, data storage, and real-time updates. The `index.js` file encapsulates the essential functionality for managing user interactions with the application and processing data efficiently.                                                                                  |
| [register.astro](src\pages\register.astro)                               | Enables user registration by handling form submission, creating a new user profile, and storing user data securely in the database. Implements Firebase authentication and Firestore services for a seamless registration process in the student portal.                                                                                                                                                                                                                                                                                                                                                |
| [rejected-students.astro](src\pages\rejected-students.astro)             | Implements functionality to manage rejected students at Red Arrow Flight Academy. Displays a list of rejected student details, allowing admins to add or remove students. Integrates Firebase authentication for user management, dynamic navigation updates, and real-time student data updates from the Firestore database.                                                                                                                                                                                                                                                                           |
| [rss.xml.js](src\pages\rss.xml.js)                                       | Generates RSS feed for blog posts using Astro.js RSS module. Retrieves blog collection data and maps it into structured feed items with titles, descriptions, and links based on site constants.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [signin.astro](src\pages\signin.astro)                                   | Enables user authentication with email and Google sign-in on the student portal. Automatically redirects authenticated users to the dashboard. Seamless integration with Firebase for authentication and backend API calls. Effortlessly handles sign-in errors and prompts user interactions for account creation and password recovery.                                                                                                                                                                                                                                                               |
| [students.astro](src\pages\students.astro)                               | Enables managing students and navigation tabs dynamically based on user roles. Integrates with Firebase for student data handling and authentication. Facilitates adding/removing students, displaying student details, and adjusting dashboard links. Enhances usability and admin control within the Red Arrow Flight Academy platform.                                                                                                                                                                                                                                                               |

</details>

<details closed><summary>src.styles</summary>

| File                                | Summary                                                                                                                                                                                              |
| ---                                 | ---                                                                                                                                                                                                  |
| [global.css](src\styles\global.css) | Defines global styling for the project with Tailwind CSS utility classes, focusing on button styles and swiper navigation components. Enhances user interactions and visual appeal across web pages. |

</details>

<details closed><summary>src.pages.about</summary>

| File                                               | Summary                                                                                                                                                                                                                                                                                           |
| ---                                                | ---                                                                                                                                                                                                                                                                                               |
| [our-fleet.astro](src\pages\about\our-fleet.astro) | Showcases Red Arrow Flight Academys fleet and simulators with interactive listings for training and rentals. Provides rental agreements and instructor rates. Highlights diverse aircraft options and emphasizes user-friendly navigation.                                                        |
| [our-story.astro](src\pages\about\our-story.astro) | Illustrates Red Arrow Flight Academys inception and growth story with a focus on innovative aviation training methods, safety, and proficiency. Highlights the academys commitment to excellence and its evolution from a modest beginning to a prestigious aviation training institution.        |
| [our-team.astro](src\pages\about\our-team.astro)   | Illustrates Red Arrow Flight Academys team composition page. Showcases leadership and flight/dispatch teams with member cards. Prominently displays team info on an engaging, structured layout. Facilitates user interaction for inquiries. Enhances overall site usability and user experience. |

</details>

<details closed><summary>src.pages.blog</summary>

| File                                              | Summary                                                                                                                                                                                   |
| ---                                               | ---                                                                                                                                                                                       |
| [index.astro](src\pages\blog\index.astro)         | Generates blog page layout showcasing latest posts sorted by publication date, enhancing user experience.                                                                                 |
| [[...slug].astro](src\pages\blog\[...slug].astro) | Generates paths for blog posts, mapping each post to its slug. Renders blog post content dynamically, utilizing a layout component. Includes a call-to-action button to contact the site. |

</details>

<details closed><summary>src.pages.discovery-flight</summary>

| File                                                  | Summary                                                                                                                                                                                                                                                                                                                                 |
| ---                                                   | ---                                                                                                                                                                                                                                                                                                                                     |
| [index.astro](src\pages\discovery-flight\index.astro) | Defines and showcases the Discovery Flight experience at Red Arrow Flight Academy.-Presents flight options and pricing transparently.-Engages potential pilots with simulator tests, scenic flights, and aerial photography opportunities.-Invites users to book unforgettable introductory flights through an immersive web interface. |

</details>

<details closed><summary>src.pages.flight-programs</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [international-program.astro](src\pages\flight-programs\international-program.astro)         | Guides international students through the M-1 Visa process and foreign pilot license conversion, providing step-by-step instructions in an immersive web layout. Elevates aviation education by offering comprehensive resources and expert guidance.                                                                                                                                                                                                                                                 |
| [military-rotor-transition.astro](src\pages\flight-programs\military-rotor-transition.astro) | Highlights program details for Military/Rotor Transition at Red Arrow Flight Academy. Showcases specialized training for military and civilian helicopter pilots, add-on certifications, GI Bill® approval, Army Credentialing Assistance, and support for soldiers and units. Encourages enrollment and accessing aviation journey funds.                                                                                                                                                            |
| [new-to-flying-old.astro](src\pages\flight-programs\new-to-flying-old.astro)                 | This code file, `index.js`, serves as the main entry point for the functions component in the Red Arrow project repository. It encapsulates the functionality responsible for managing backend logic and executing server-side operations. The critical features include handling API requests, processing data, and orchestrating communication with external services. Its role is pivotal in ensuring the smooth operation of the server-side processes within the Red Arrow project architecture. |
| [new-to-flying.astro](src\pages\flight-programs\new-to-flying.astro)                         | Illustrates Red Arrow Flight Academys new pilot program with engaging visuals and informative content. Guides aspiring pilots from start to finish, highlighting training programs, budget considerations, and career paths. Empowers users to enroll, book discovery flights, and explore financing options seamlessly.                                                                                                                                                                              |
| [training-courses.astro](src\pages\flight-programs\training-courses.astro)                   | Showcases pilot training courses, from PPL to advanced programs. Offers accelerated and flexible tracks tailored to individual schedules and aviation goals. Emphasizes immersive training, rapid progress, and top-tier guidance for aspiring pilots at Red Arrow Flight Academy.                                                                                                                                                                                                                    |
| [university-program.astro](src\pages\flight-programs\university-program.astro)               | Illustrates Red Arrow Flight Academys University Program, promoting aviation career opportunities in collaboration with Purdue Global. Provides information on professional flight and aviation management degrees, highlights program benefits, tuition reductions, and emphasizes partnership advantages. Encourages enrollment through tailored support for adult learners.                                                                                                                        |

</details>

<details closed><summary>src.pages.resources</summary>

| File                                                               | Summary                                                                                                                                                                                                                                                                                                      |
| ---                                                                | ---                                                                                                                                                                                                                                                                                                          |
| [faa-exam-center.astro](src\pages\resources\faa-exam-center.astro) | Defines the Red Arrow FAA Testing Center page layout within the repository, showcasing the test centers benefits and exam scheduling details. Employs a BaseLayout component for a cohesive design approach, emphasizing convenience and security for aviators undertaking FAA written exams at the academy. |
| [financing.astro](src\pages\resources\financing.astro)             | Presents financing options for flight training at Red Arrow Flight Academy through engaging visuals and informative content.-Highlights partners like Meritize and Stratus Financial.-Includes interactive features such as FinancingTabs and a QuizCTA for user engagement.                                 |
| [maintenance.astro](src\pages\resources\maintenance.astro)         | Showcase maintenance services for piston aircraft at Red Arrow Flight Academy through a dedicated page. Highlight top-tier care by A&P and IA mechanics, offering inspections, repairs, and pre-purchase evaluations. Encourage contact for detailed information on services.                                |

</details>

<details closed><summary>src.pages.api.auth</summary>

| File                                          | Summary                                                                                                                                                                    |
| ---                                           | ---                                                                                                                                                                        |
| [register.ts](src\pages\api\auth\register.ts) | Registers new users by handling form data, creating users using Firebase authentication, and redirecting to the sign-in page.                                              |
| [signin.ts](src\pages\api\auth\signin.ts)     | Implements an API route to authenticate users using Firebase. Verifies the token, creates a session cookie, and redirects to the dashboard upon successful authentication. |
| [signout.ts](src\pages\api\auth\signout.ts)   | Enables signing out by deleting session cookies and redirecting to the sign-in page.                                                                                       |

</details>

---

##  Getting Started

**System Requirements:**

* **Node.js**: `v18 or higher`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the \Users\asus\OneDrive\Desktop\projects\red-arrow repository:
>
> ```console
> $ git clone ../\Users\asus\OneDrive\Desktop\projects\red-arrow
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd \Users\asus\OneDrive\Desktop\projects\red-arrow
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run \Users\asus\OneDrive\Desktop\projects\red-arrow using the command below:
> ```console
> $ npm run dev
> ```

---
