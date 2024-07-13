import { NavLink } from "react-router-dom";

export const HomePageExplore = [
    {
        tag: 'Beginner',
        courses : [
            {
                heading : "Learn HTML",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level: <NavLink to='/Htmldata' >Learn More</NavLink>,
                lessionNumber : 3
            },
            {
                heading : "Learn CSS",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : <NavLink to='/Cssdata' >Learn More</NavLink>,
                lessionNumber : 6
            },
            {
                heading : "Javascript",
                description : "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. ",
                level : <NavLink to='/Jsdata' >Learn More</NavLink>,

                lessionNumber : 9
            },
        ]
    },
    {
        tag: 'Intermediate',
        courses : [
            {
                heading : "React",
                description : "React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the user interface as data changes.",
                level : 'Intermediate',
                lessionNumber : 6
            },
            {
                heading : "Bootstrap",
                description : "Bootstrap is a popular front-end framework that provides pre-designed, responsive, and customizable CSS and JavaScript components for building web interfaces. It simplifies the process of creating a visually appealing and responsive design.",
                level : 'Intermediate',
                lessionNumber : 2
            },
            {
                heading : "TypeScript ",
                description : "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch type-related errors during development and makes code more maintainable and predictable.",
                level : 'Intermediate',
                lessionNumber : 3
            },
        ]
    },
    {
        tag: 'Most Popular ',
        courses : [
            {
                heading : "Nodejs",
                description : "Node.js is a runtime environment that allows developers to run JavaScript on the server side.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "React",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Python",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
    {
        tag: 'Backend',
        courses : [
            {
                heading : "PHP",
                description : "PHP is a server-side scripting language commonly used for web development. It is used to build dynamic web applications, server scripts, and web services.",
                level : 'Backend',
                lessionNumber : 4
            },
            {
                heading : "Django",
                description : "Django is a high-level Python web framework that simplifies the development of web applications. It includes various features, such as an ORM (Object-Relational Mapping) system, authentication, and an admin interface.",
                level : 'Backend',
                lessionNumber : 1
            },
            {
                heading : "MongoDB",
                description : "MongoDB is a NoSQL database system that stores data in a flexible, schema-less format, using JSON-like documents. It is often used for applications that require scalable and high-performance data storage.",
                level : 'Backend',
                lessionNumber : 10
            },
        ]
    },
    {
        tag: 'Career paths',
        courses : [
            {
                heading : "Next.js",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Nuxt.js",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Sanity",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
]