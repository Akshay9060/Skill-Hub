import React from 'react';
import { useSkills } from '../services/dataService';

function Skills() {
  const skills = useSkills();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6">All Skills</h1>
        <p className="text-lg text-gray-700 mb-8">
          Browse through available skills and find the ones that match your interests.
        </p>

        {Object.entries(groupedSkills).map(([category, skillList]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold capitalize text-secondary mb-3">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillList.map((skill) => (
                <div key={skill.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                  <h3 className="text-xl font-medium text-primary">{skill.name}</h3>
                  <span className="inline-block mt-2 text-sm bg-accent text-white px-3 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;