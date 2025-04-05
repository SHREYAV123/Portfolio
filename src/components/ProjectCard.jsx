import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';

export const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#1a1a30',
        borderRadius: '16px',
        padding: 2,
        maxWidth: '400px',
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.3)',
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: '100%', height: '230px', objectFit: 'cover' }}
          image={project.image}
          alt={project.title}
        />
        {/* Buttons positioned below the image */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
        <button
  type="button"
  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700"
  onClick={() => window.open(project.details.demoLink, '_blank')}
>
  Demo
</button>

<button
  type="button"
  className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-800"
  onClick={() => window.open(project.details.codeLink, '_blank')}
>
  Code
</button>

        </Box>
      </Card>

      {/* Display content separately */}
      <Box sx={{ color: '#e2e8f0' }}>
        <h3 style={{ color: '#38bdf8', fontSize: '1.8rem' }}>{project.title}</h3>
        <p style={{ color: '#94a3b8' }}>{project.details.description}</p>
        <div>
          {project.details.technologies.map((tech) => (
            <span key={tech} style={{ color: '#4ade80', textDecoration: 'underline', marginRight: '8px' }}>
              #{tech}
            </span>
          ))}
        </div>
      </Box>
    </Box>
  );
};
