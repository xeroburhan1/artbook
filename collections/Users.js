const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: "Management",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;