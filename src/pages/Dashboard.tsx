import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, BookOpen, CheckCircle, Lightbulb } from 'lucide-react';

function Dashboard() {
  const { user } = useAuth();

  const recentIdeas = [
    { id: 'idea-1', title: 'Custom Clothing Boutique', status: 'in-progress' },
    { id: 'idea-2', title: 'Handicraft Marketplace', status: 'not-started' },
  ];

  const upcomingSessions = [
    { mentor: 'Aisha Patel', skill: 'Tailoring', date: '2024-09-15' },
    { mentor: 'Ravi Kumar', skill: 'Handicrafts', date: '2024-09-20' },
  ];

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-primary">Welcome, {user?.email}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{recentIdeas.length}</h2>
            <p className="text-gray-600">Business Ideas Generated</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Resources Accessed</h2>
            <p className="text-gray-600">5 learning resources viewed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{upcomingSessions.length}</h2>
            <p className="text-gray-600">Upcoming Mentor Sessions</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Recent Ideas</h3>
            <ul className="space-y-2">
              {recentIdeas.map((idea) => (
                <li key={idea.id} className="flex justify-between items-center border-b pb-2">
                  <span>{idea.title}</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    idea.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'
                  }`}>
                    {idea.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Upcoming Mentorship Sessions</h3>
            <ul className="space-y-2">
              {upcomingSessions.map((session, idx) => (
                <li key={idx} className="border-b pb-2">
                  <p><strong>{session.mentor}</strong> – {session.skill}</p>
                  <p className="text-sm text-gray-500">{session.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;