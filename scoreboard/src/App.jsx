import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    dept: '',
    dob: '',
    year: '',
    no_of_cert: '',
    certificates: [''],
    leetcode_solved: '',
    codechef_solved: '',
    github: '',
    cgpa: '',
    attendance: '',
    nptel: [''],
    coursera: [''],
    udemy: [''],
    other_platform: [''],
    no_of_project: '',
    projects: [''],
    external_participations: [''],
    awards: [''],
    paper_published: [''],
    leetcode_URL: '',
    codechef_URL: '',
    github_URL: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'year') {
      // Ensure year is within the range 1 to 4
      const yearValue = parseInt(value, 10);
      if (yearValue >= 1 && yearValue <= 4) {
        setFormData({ ...formData, [name]: yearValue });
      } else {
        setError('Year must be between 1 and 4.');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleAddInput = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.year < 1 || formData.year > 4) {
      setError('Year value must be between 1 and 4.');
      return;
    }
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('User created:', data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Basic inputs */}
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Roll Number" required />
      <input type="text" name="dept" value={formData.dept} onChange={handleChange} placeholder="Department" required />
      <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth (dd/mm/yyyy)" required />
      <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" required />
      <input type="number" name="no_of_cert" value={formData.no_of_cert} onChange={handleChange} placeholder="Number of Certificates" required />
      <input type="number" name="leetcode_solved" value={formData.leetcode_solved} onChange={handleChange} placeholder="LeetCode Solved" required />
      <input type="number" name="codechef_solved" value={formData.codechef_solved} onChange={handleChange} placeholder="CodeChef Solved" required />
      <input type="number" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA" required />
      <input type="number" name="attendance" value={formData.attendance} onChange={handleChange} placeholder="Attendance" required />
      <input type="number" name="no_of_project" value={formData.no_of_project} onChange={handleChange} placeholder="Number of Projects" required />
      
      {/* Arrays with dynamic inputs */}
      {/* Certificates */}
      {formData.certificates.map((cert, index) => (
        <div key={index}>
          <input type="text" value={cert} onChange={(e) => handleArrayChange(index, 'certificates', e.target.value)} placeholder="Certificate" required />
          {index === formData.certificates.length - 1 && <button type="button" onClick={() => handleAddInput('certificates')}>+</button>}
        </div>
      ))}
      {/* NPTEL Courses */}
      {formData.nptel.map((course, index) => (
        <div key={index}>
          <input type="text" value={course} onChange={(e) => handleArrayChange(index, 'nptel', e.target.value)} placeholder="NPTEL Course" required />
          {index === formData.nptel.length - 1 && <button type="button" onClick={() => handleAddInput('nptel')}>+</button>}
        </div>
      ))}
      {/* Coursera Courses */}
      {formData.coursera.map((course, index) => (
        <div key={index}>
          <input type="text" value={course} onChange={(e) => handleArrayChange(index, 'coursera', e.target.value)} placeholder="Coursera Course" required />
          {index === formData.coursera.length - 1 && <button type="button" onClick={() => handleAddInput('coursera')}>+</button>}
        </div>
      ))}
      {/* Udemy Courses */}
      {formData.udemy.map((course, index) => (
        <div key={index}>
          <input type="text" value={course} onChange={(e) => handleArrayChange(index, 'udemy', e.target.value)} placeholder="Udemy Course" required />
          {index === formData.udemy.length - 1 && <button type="button" onClick={() => handleAddInput('udemy')}>+</button>}
        </div>
      ))}
      {/* Other Platforms */}
      {formData.other_platform.map((platform, index) => (
        <div key={index}>
          <input type="text" value={platform} onChange={(e) => handleArrayChange(index, 'other_platform', e.target.value)} placeholder="Other Platform" required />
          {index === formData.other_platform.length - 1 && <button type="button" onClick={() => handleAddInput('other_platform')}>+</button>}
        </div>
      ))}
      {/* Projects */}
      {formData.projects.map((project, index) => (
        <div key={index}>
          <input type="text" value={project} onChange={(e) => handleArrayChange(index, 'projects', e.target.value)} placeholder="Project" required />
          {index === formData.projects.length - 1 && <button type="button" onClick={() => handleAddInput('projects')}>+</button>}
        </div>
      ))}
      {/* External Participations */}
      {formData.external_participations.map((participation, index) => (
        <div key={index}>
          <input type="text" value={participation} onChange={(e) => handleArrayChange(index, 'external_participations', e.target.value)} placeholder="External Participation" required />
          {index === formData.external_participations.length - 1 && <button type="button" onClick={() => handleAddInput('external_participations')}>+</button>}
        </div>
      ))}
      {/* Awards */}
      {formData.awards.map((award, index) => (
        <div key={index}>
          <input type="text" value={award} onChange={(e) => handleArrayChange(index, 'awards', e.target.value)} placeholder="Award" required />
          {index === formData.awards.length - 1 && <button type="button" onClick={() => handleAddInput('awards')}>+</button>}
        </div>
      ))}
      {/* Papers Published */}
      {formData.paper_published.map((paper, index) => (
        <div key={index}>
          <input type="text" value={paper} onChange={(e) => handleArrayChange(index, 'paper_published', e.target.value)} placeholder="Paper Published" required />
          {index === formData.paper_published.length - 1 && <button type="button" onClick={() => handleAddInput('paper_published')}>+</button>}
        </div>
      ))}
      <input type="text" name="github_URL" value={formData.github_URL} onChange={handleChange} placeholder="GitHub Link" required />
      <input type="text" name="leetcode_URL" value={formData.leetcode_URL} onChange={handleChange} placeholder="LeetCode Link" required />
      <input type="text" name="codechef_URL" value={formData.codechef_URL} onChange={handleChange} placeholder="CodeChef Profile" required />


      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
    
  );
};

export default App;