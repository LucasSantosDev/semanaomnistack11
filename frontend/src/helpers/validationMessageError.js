const validationMessageError = error => {
  if (error.response) {
    const status = error.response.status ? error.response.status : false;
    const inputsFail =
      error.response.data &&
      error.response.data.validation &&
      error.response.data.validation.keys
        ? error.response.data.validation.keys
        : [];
    const messages =
      error.response.data && error.response.data.message
        ? [{ msg: error.response.data.message, type: "error" }]
        : error.response.data.error
        ? [{ msg: error.response.data.error, type: "error" }]
        : [];

    return {
      status,
      inputsFail,
      messages
    };
  } else {
    return {
      status: false,
      inputsFail: [],
      messages: []
    };
  }
};

export default validationMessageError;
