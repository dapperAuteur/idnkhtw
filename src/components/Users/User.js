import React from 'react';

const User = (props) => {
  console.log(props);
  let { id, username } = props;

  return (
    <h1>
      User: { username }
    </h1>
  )
}

export default User;
