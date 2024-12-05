/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {

  // Insert admin user
  const [adminUser] = await knex('User')
    .insert({
      name: 'Admin User',
      email: 'admin@gmail.com',
      verified: true,
      password: '$2a$12$SLJzLkvc/j.9wRtdjranV.CbKqIn3ce57hHu2VB4CHCgCR.jl/waa', // pre-hashed password
      role: 'admin',
      provider: 'local',
    })
    .returning('id');
  
  // Map admin user to admin role
  await knex('UserRole').insert({
    userId: adminUser.id,  // Use adminUser.id instead of the object
    roleId: 1,  // Use adminRole.id instead of the object
  });

  console.log('Admin seed data has been inserted successfully.');
};
