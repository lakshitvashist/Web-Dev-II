import React, { useState } from 'react';

const AdvisoryForm = () => {
  const [formData, setFormData] = useState({
    name: '', location: '', crop: '', area: '', concern: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Our team will contact you shortly with a customized advisory for your ${formData.crop} farm.`);
    setFormData({ name: '', location: '', crop: '', area: '', concern: '' });
  };

  return (
    <section id="advisory" className="advisory-form">
      <h2>Get Your Farm Advisory</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Farm Name</label>
          <input type="text" value={formData.name} required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" value={formData.location} required 
            onChange={(e) => setFormData({...formData, location: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Primary Crop</label>
          <select value={formData.crop} required onChange={(e) => setFormData({...formData, crop: e.target.value})}>
            <option value="">Select a crop</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Corn">Corn</option>
            <option value="Cotton">Cotton</option>
          </select>
        </div>
        <div className="form-group">
          <label>Farm Area (acres)</label>
          <input type="number" value={formData.area} required 
            onChange={(e) => setFormData({...formData, area: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Main Concern</label>
          <textarea value={formData.concern} placeholder="Tell us about your challenges..."
            onChange={(e) => setFormData({...formData, concern: e.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Get Free Advisory</button>
      </form>
    </section>
  );
};

export default AdvisoryForm;