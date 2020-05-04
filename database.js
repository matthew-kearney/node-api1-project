let users = [
    { id: "1", name: "joe exotic", bio: "tiger guy" },
    { id: "2", name: "carol baskins", bio: "murderer" },
    { id: "3", name: "carols husband", bio: "loser" },
  ];
 
  function getUsers() {
    return users;
  }
 
  function getUserById(id) {
    return users.find((u) => u.id === id);
  }
 
  function createUser(data) {
    const payload = {
      id: String(users.length + 1),
      ...data,
    };
 
    users.push(payload);
    return payload;
  }
 
  function updateUser(id, data) {
    const index = users.findIndex((u) => u.id === id);
    users[index] = {
      ...users[index],
      ...data,
    };
 
    return users[index];
  }
 
  function deleteUser(id) {
    users = users.filter((u) => u.id != id);
  }
 
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };