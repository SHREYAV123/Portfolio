import React from 'react';
import { FaCertificate, FaTrophy, FaCommentDots } from 'react-icons/fa';

const certifications = [
  { name: 'Artificial Intelligence Primer Certification', score: '67.5%', date: 'Aug 28, 2024' },
  { name: 'Principles of Generative AI Certification', score: '92%', date: 'May 2, 2024' },
  { name: 'JavaScript Assessment', score: '92%', date: 'May 2, 2024' },
  { name: 'Python Programming Fundamentals Part 1', score: '93.33%', date: 'Dec 26, 2023' },
  { name: 'Python Programming Fundamentals Part 2', score: '75%', date: 'Feb 14, 2024' },
  { name: 'HTML5 Assessment', score: '84%', date: 'Nov 26, 2023' },
  { name: 'CSS3 Assessment', score: '80%', date: 'Nov 26, 2023' }
];

const achievements = [
  'Solved 500+ problems on LeetCode, Codeforces, HackerRank, and CodeChef',
  '6-Star Coder on HackerRank',
  '100+ Problems Solved on LeetCode'
];

const skills = [
  'Certified in Email Writing Skills and High Impact Presentations (100% Completion)',
  'Applied professional communication skills in Blog-Hive and PayNest projects'
];

const Experience = () => {
  return (
    <section className='min-h-screen p-8 px-6 py-20 mx-auto font-sans text-white border-b pb-14 border-neutral-800 lg:px-16' id='experience'>
    <div className="container ">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-green-600 reveal-up ">Certifications <span className='text-gray-500'> & </span> <span className='text-blue-200'>Achievements</span></h1>
        <p className="text-lg text-gray-400">Showcasing my learning journey, certifications, and problem-solving accomplishments.</p>
      </header>

      <Section title="Certifications" icon={<FaCertificate className="mr-2 text-cyan-400" />} boxColor="bg-gray-800" data={certifications} />
      <Section title="Competitive Programming Achievements" icon={<FaTrophy className="mr-2 text-yellow-500" />} boxColor="bg-gray-900" data={achievements} isAchievement />
      <Section title="Communication and Soft Skills" icon={<FaCommentDots className="mr-2 text-green-400" />} boxColor="bg-gray-800" data={skills} isSkill />
    </div>
    </section>
  );
};

const Section = ({ title, icon, data, isAchievement, isSkill, boxColor }) => (
  <section className="mb-12" >
    <h2 className={`text-xl font-semibold flex items-center mb-6 ${title === 'Certifications' ? 'text-cyan-400' : boxColor === 'bg-gray-800' ? 'text-green-400' : 'text-yellow-500'}`}>{icon}{title}</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div key={index} className={`p-4 ${boxColor} shadow-lg rounded-lg reveal-up transition-transform transform hover:scale-105 border-2 border-gray-700 hover:border-[conic-gradient(from_180deg_at_50%_50%,#00ffcc,#0077ff)] hover:shadow-[0_0_25px_#00c7c7,0_0_50px_#0077ff] hover:bg-opacity-90`}> 
          {isAchievement ? (
            <div className="flex items-center">
              <FaTrophy className="mr-4 text-2xl text-yellow-500" />
              <p className="text-gray-300">{item}</p>
            </div>
          ) : isSkill ? (
            <div className="flex items-center">
              <FaCommentDots className="mr-4 text-2xl text-green-400" />
              <p className="text-gray-300 reveal-up">{item}</p>
            </div>
          ) : (
            <>
              <p className="font-semibold text-gray-100 reveal-up">{item.name}</p>
              <p className="text-gray-400">Score: {item.score} | Date: {item.date}</p>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
