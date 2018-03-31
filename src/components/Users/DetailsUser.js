import React from 'react';

const DetailsUser = (props) => {
  let { user } = { ...props };

  return (
    <div>
      <h1>User: { user.username }</h1>
      <h3>Email: { user.email }</h3>
      <h3>Profile Image: { user.profileImageUrl }</h3>
    </div>
  )
}

export default DetailsUser;
