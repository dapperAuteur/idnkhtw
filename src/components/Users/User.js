import React from 'react';

const User = (props) => {
  console.log(props);
  let id = props.id;
  let username = props.username;

  return (
    <h1>
      User: { username }
    </h1>
  )
}

export default User;
