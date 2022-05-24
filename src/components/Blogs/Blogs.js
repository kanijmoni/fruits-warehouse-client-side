import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-white bg-info mt-5'>Questions And Answers</h1>
            <p className='text-center mt-5'>Question:Write the differences between javascript and nodejs.</p><br></br>
            <p className='text-center mt-5'>Answer:JavaScript is a programming language used mostly in browser.Javascript is used for writing scripts on the website.It is used to build dynamic HTML pages with interactive effects on a webpage,mobile applications,games,server application etc.
                However, NodeJS provides a runtime environment for Javascript code outside the browser.Node.js is used to create API's ,connect to database ,perform machine learning operations among many other things.Node.js can run on various platforms - Windows,Linux,Mac OS,etc.</p><br></br>
            <p className='text-center mt-5'>Question:Differences between sql and nosql databases.</p><br></br>
            <p className='text-center mt-5'>Answer: SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed .SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p><br></br>
            <p className='text-center mt-5'>Question: When should you use nodejs and when should you use mongodb?</p><br></br>
            <p className='text-center mt-5'>Answer:MongoDB and NodeJS are two different technologies. MongoDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criteria.
                NodeJS's responsibility is especially to execute our application.Nodejs is a Javascript engine that we can write any application we want with (by programming in the Javascript language). It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give we programmatic access to MongoDB so we can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...
                These two technologies are for different parts of a typical web server system. We don't substitute one for the other. Instead, we can use them together.Any project needs a programming environment and a runtime library that offers we basic programming tools/support and can compile and/or interpret our code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...So, if we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it.</p>
            <p className='text-center mt-5'>Question: What is the purpose of jwt and how does it work?</p><br></br>
            <p className='text-center mt-5'>Answer:JWT, or JSON Web Token is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.
                Without JWT we can access the protected route.With JWT we can't access the protected route.JWT is mainly used for authorization purpose,not authentication.When client log in with username and password server creates a token for the client.server sends the token to the client.Client stores the token on either local or browser cookie.Next time the client makes a request ,a copy of the token is send to the server for authorization.Server verifies the JWT signature before giving the authorization.Server responds to the client request.</p>
        </div>
    );
};

export default Blogs;