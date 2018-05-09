import React from 'react';

const ErrorMessages = (props) => {
  let { errorMessage } = props;
  if (errorMessage !== undefined && errorMessage !== null) {
    let message = errorMessage.errorMessage;
    return (
      <div>
        { message }
      </div>
    )
  } else {
    return null;
  }
}

export default ErrorMessages;
