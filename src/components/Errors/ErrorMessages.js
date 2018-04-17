import React from 'react';

const ErrorMessages = (props) => {
  // console.log(props);
  let { errorMessage } = props;
  // console.log(errorMessage);
  if (errorMessage !== undefined && errorMessage !== null) {
    let message = errorMessage.errorMessage;
    // console.log(message);
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
