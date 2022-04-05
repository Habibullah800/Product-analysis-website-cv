import React from 'react';
import './Blog.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Ques-1: What is context Api?</h2>
            <p>Context API is one of the best state management solutions for separate disconnected components in React. React Context API provides an easy way to pass data through the component tree without having to pass props down manually at every level. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
            </p>
            <h2>Ques-2: What is a semantic tag?</h2>
            <p>
                Semantic tagging is the process of connecting an element from an ontology with a database or document, such as a website with computer file.
                A semantic tag describes its meaning to the browser. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Such as semantic elements: table , article  etc.

            </p>
            <h2>Ques-3: What is Inline block and inline block element  ?


            </h2>
            <p>
                inline-block is a formatted just like the inline element, where it doesn't start on a new line. But, it can set width and height values. block The element will start on a new line and occupy the full width available.<br></br> On the other hand: Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. Inline-block elements will have to declare display: inline-block in any CSS code. One common use for using inline-block is for creating navigation links.
            </p>
        </div >
    );
};

export default Blogs;