import React from 'react';

function ContactList({ contactsList, deleteContact }) {

  return (
    <div>
      <ul>
        {contactsList.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button type='button' onClick={()=>{deleteContact(id)}}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;