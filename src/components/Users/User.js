import React from 'react';

const User = (props) => {
  let { id, user, username } = props;

  return (
    <h1>
      User: { username } : { user.email }
    </h1>
  )
}

export default User;
