import React from 'react';
import { getMentors } from '../services/dataService';

function Mentors() {
  const mentors = getMentors();

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">Our Mentors</h1>
        <p className="text-lg text-gray-700 mb-8">
          Connect with experienced mentors to guide you on your journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold text-primary">{mentor.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    mentor.available
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {mentor.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{mentor.experience} experience</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {mentor.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="bg-accent bg-opacity-20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {exp}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-700 text-sm">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;