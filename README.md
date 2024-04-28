# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

-- A NoSQL MongoDB database had a few advantages that benefited our project. First, the program stored data using a JSON format, which complemented other components of MEAN, including Express HTML and NodeJS, providing better performance and speed. Second, MongoDB is schema-less providing greater flexibility to handle almost any data type and handle that data in the future as technologies change. MongoDB also can handle large amounts of data due to its horizontal scale-out architecture and unstructured nature. A schemaless database will leave almost all data unchanged meaning everything is always available. 

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

-- JSON is used to read data from a web server and display it through a web browser. Thus, JSON is a text-only format, or a string of data, typically written in key/pair values surrounded by double quotes. JSON is written using JavaScript syntax. Javascript objects use curly braces and key/pair values. Understanding this, we can use both to transfer data between the server (JSON) and the frontend (JavaScript). "JSON is written only as text and is a seamless way to send Javascript data between the browser and server. We will convert the Javascript object by using JSON.parse() to convert a JSON object back into a JavaScript object, and we will use JSON.stringify() to turn a JavaScript object into a string that is our JSON object." (Easterly, 2022)

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?



Citations:

Easterly, A. E. (2022, January 7). JSON Object v. JavaScript Object - Geek Culture - Medium. Medium. https://medium.com/geekculture/json-object-v-javascript-object-f00ae788cc1f#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImUxYjkzYzY0MDE0NGI4NGJkMDViZjI5NmQ2NzI2MmI2YmM2MWE0ODciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMwMzczOTI1MTI3Mzk2MDQ5MDUiLCJlbWFpbCI6Im1pY2hlYWx3aGl0ZTc3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTQzMjI4MDUsIm5hbWUiOiJNaWNoZWFsIFdoaXRlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pzeUNTUHhNNTVCN2dJa0s3eEFkdzNQRnVodklyS0VaWm9tTER6bVpFX3ZXX2tjN0dIPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1pY2hlYWwiLCJmYW1pbHlfbmFtZSI6IldoaXRlIiwiaWF0IjoxNzE0MzIzMTA1LCJleHAiOjE3MTQzMjY3MDUsImp0aSI6Ijk1YTlmODFhMWI0YWNkYWI1ODExOTczYTNmMzdmM2YzZWVlYTU5N2EifQ.gKUl4hX5D5Z12YlP_ImyRLDom1VCEiLViq5EZgyQy6ZFzntgbTfXTb1bebh6tuyd1_CNubK36IX7slhW3

Editor. (2021, April 24). MEAN and MERN stacks: Full stack JavaScript development explained. AltexSoft. https://www.altexsoft.com/blog/mean-mern-javascript-full-stack/

MongoDB. (n.d.). Schemaless database. https://www.mongodb.com/resources/basics/unstructured-data/schemaless
