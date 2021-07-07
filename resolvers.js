const user = {
  _id: "1",
  name: "Connie",
  email: "connie2630a@gmail.com",
  picture: "https://cloudinary.com/asdf",
};

module.exports = {
  Query: {
    me: () => user,
  },
};
