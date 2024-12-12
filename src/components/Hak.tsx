import React from 'react';
import Header from '../app/Header';

function Hak() {
  const users = [
    {
      name: 'Pat Black',
      accessStatus: 'Admin',
      email: 'bill.berry@example.com',
      age: 28,
    },
    {
      name: 'Angel Jones',
      accessStatus: 'Admin',
      email: 'glen.ramirez@example.com',
      age: 36,
    },
    {
      name: 'Max Edwards',
      accessStatus: 'Employee',
      email: 'renee.hughes@example.com',
      age: 27,
    },
    {
      name: 'Bruce Fox',
      accessStatus: 'Employee',
      email: 'craig.kelley@example.com',
      age: 43,
    },
    {
      name: 'Devon Fisher',
      accessStatus: 'Employee',
      email: 'joy.ramos@example.com',
      age: 32,
    },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">All User</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Access Status</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.accessStatus}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hak;
