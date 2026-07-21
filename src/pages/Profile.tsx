import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Mail, User, Shield } from 'lucide-react';

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Your Profile</h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="flex items-center gap-3 border-b pb-3">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b pb-3">
            <User className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="text-lg font-medium capitalize">{user.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="text-lg font-medium text-green-600">Active</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            💡 You can update your profile details later. For now, this is a basic view.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;