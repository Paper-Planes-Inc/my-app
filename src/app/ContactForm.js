"use client";
import { useEffect, useState } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({

    email: "",

  });
  

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setStatus("Please, fill out the contact form.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ email: ""});
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }

    setLoading(false);
  };

    // ⏳ Hide status after 5 seconds
    useEffect(() => {
      if (status) {
        const timer = setTimeout(() => {
          setStatus("");
        }, 5000);
  
        return () => clearTimeout(timer); // Cleanup on unmount or when status changes
      }
    }, [status]); // Runs whenever `status` updates

  return (
    <form 
      onSubmit={handleSubmit} 
      method="post" 
      className="contact-form" 
      data-fill-error="Please, fill out the contact form." >
      <div className="form-content contact-fill-blank w-full">

          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="your@dispensary.com" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />


        <button className="button sm:w-auto w-full" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Apply now"}
          </button>

      </div>

          
 
        {status && <div className="contact-form__response">{status}</div>}
      {loading && <span className="form-spinner"></span>}
    </form>
  );
}
