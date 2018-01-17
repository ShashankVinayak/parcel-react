import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstname: 'Shashank',
    lastname: 'Vinayak'
};

const element = (
    <div>
        <p>FirstName: {user.firstname}</p>
        <p>LastName: {user.lastname}</p>
    </div>
);

ReactDOM.render(element, document.getElementById('app'));