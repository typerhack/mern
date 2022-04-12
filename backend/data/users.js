import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    usersEmail: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    usersEmail: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    usersEmail: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
