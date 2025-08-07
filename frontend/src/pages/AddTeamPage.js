import React, { useState } from 'react';
import { createTeam } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddTeamPage = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await createTeam({ name, city });
      setMessage(`✅ Team "${response.data.name}" created successfully!`);
      setIsError(false);
      setName('');
      setCity('');
      setTimeout(() => navigate('/teams'), 1500); // Redirect after 1.5s
    } catch (error) {
      const backendMsg = error.response?.data?.message || 'Failed to create team. Please try again.';
      setMessage(`❌ ${backendMsg}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Team</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Team Name
          </label>
          <input
            type="text"
            placeholder="e.g., Arsenal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="e.g., London"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
            {loading ? 'Creating...' : 'Add Team'}
          </button>
        </div>
      </form>

      {message && (
        <p
          className={`text-center text-sm mt-4 ${
            isError ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default AddTeamPage;
