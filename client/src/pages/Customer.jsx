import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Navbar from '../sidebar/Navbar';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'; // Icons for edit and delete

const fetchCustomers = async () => {
  const result = await fetch('http://127.0.0.1:8000/Car/Customer/');
  return result.json();
};

const Customer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newCustomerData, setNewCustomerData] = useState({
    custName: '',
    emailAddress: '',
    phone: '',
    address: '',
  });

  const { data, status } = useQuery('Customer', fetchCustomers);

  const handleInputChange = (event) => {
    setNewCustomerData({
      ...newCustomerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/Car/Customer/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCustomerData),
    });

    if (!response.ok) {
      console.error('Error creating customer:', response.statusText);
      return;
    }

    alert('Customer Created Successfully');
    setIsFormOpen(false);
    setNewCustomerData({ custName: '', emailAddress: '', phone: '', address: '' });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data.</div>;
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Customer List</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((customer, idx) => (
                <tr key={idx} className={`bg-gray-${idx % 2 === 0 ? '50' : '100'}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(customer.custName)}`}
                      alt="Avatar"
                      className="h-8 w-8 rounded-full mr-4"
                    />
                    {customer.custName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.emailAddress}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Add Customer
        </button>

        {isFormOpen && (
          <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Customer</h2>
            <label htmlFor="custName">Name:</label>
            <input
              type="text"
              name="custName"
              id="custName"
              className="w-full p-2 border rounded mb-4"
              value={newCustomerData.custName}
              onChange={handleInputChange}
            />
            <label htmlFor="emailAddress">Email:</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              className="w-full p-2 border rounded mb-4"
              value={newCustomerData.emailAddress}
              onChange={handleInputChange}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full p-2 border rounded mb-4"
              value={newCustomerData.phone}
              onChange={handleInputChange}
            />
            <label htmlFor="address">Address:</label>
            <textarea
              name="address"
              id="address"
              className="w-full p-2 border rounded mb-4"
              value={newCustomerData.address}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
              Create Customer
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Customer;
