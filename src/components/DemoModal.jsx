import React, { useState } from 'react';
import { X } from 'lucide-react';
import './DemoModal.css';

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully");
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <h2 className="modal-title">Request a Demo</h2>
        <p className="modal-subtitle">Fill out the form below and we'll get back to you shortly.</p>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Farm/Company Name (optional)</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Green Acres Farm" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary modal-submit">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;
