import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { TrendingUp, Users, Lightbulb, BookOpen } from 'lucide-react';

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background text-text py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-primary mb-4">EntreSkill Hub</h1>
        <p className="text-xl mb-8">Empowering grassroots entrepreneurs to turn skills into sustainable micro-businesses.</p>
        {user ? (
          <div className="space-y-4">
            <Link to="/dashboard" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">Go to Dashboard</Link>
            <p>Welcome back, {user.email}!</p>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/register" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">Get Started</Link>
            <Link to="/login" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors">Login</Link>
          </div>
        )}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Skill Matching</h3>
            <p>Discover business ideas tailored to your skills and interests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Lightbulb className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Business Roadmaps</h3>
            <p>Step-by-step guides to launch and grow your micro-enterprise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mentorship</h3>
            <p>Connect with experienced mentors for personalized guidance.</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Who Can Benefit?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Women entrepreneurs and rural communities</li>
            <li>Youth with practical skills seeking self-employment</li>
            <li>Artisans and craftspersons aiming to market their products</li>
            <li>Anyone looking to turn a hobby into a profitable venture</li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Register and profile your skills and interests.</li>
            <li>Get personalized business idea recommendations.</li>
            <li>Follow structured roadmaps with training resources.</li>
            <li>Access mentorship and community support.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;