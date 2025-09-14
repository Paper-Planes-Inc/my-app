"use client";
import { useEffect, useState } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    state: "",
    stores: "",
    email: "",
    phone: "",
  });
  

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.email) {
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
        setFormData({ name: "", company: "", state: "", stores: "", email: "", phone: "" });
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
      <div className="form-content contact-fill-blank grid grid-cols-2 gap-4 w-full">
          <div>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

        <div>
          <input 
            type="text" 
            id="company" 
            name="company" 
            placeholder="Company name" 
            value={formData.company} 
            onChange={handleChange} 
            required
          />
        </div>
    
        <div>

          <select 
            id="state" 
            name="state" 
            placeholder="State" 
            value={formData.state} 
            onChange={handleChange} 
          >
            <option>State</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
            <option value="Georgia">Georgia</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Idaho">Idaho</option>
            <option value="Illinois">Illinois</option>
            <option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option>
            <option value="Kansas">Kansas</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option>
            <option value="Massachusetts">Massachusetts</option>
            <option value="Michigan">Michigan</option>
            <option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option>
            <option value="Missouri">Missouri</option>
            <option value="Montana">Montana</option>
            <option value="Nebraska">Nebraska</option>
            <option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="New Jersey">New Jersey</option>
            <option value="New Mexico">New Mexico</option>
            <option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option>
            <option value="North Dakota">North Dakota</option>
            <option value="Ohio">Ohio</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Oregon">Oregon</option>
            <option value="Pennsylvania">Pennsylvania</option>
            <option value="Rhode Island">Rhode Island</option>
            <option value="South Carolina">South Carolina</option>
            <option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Utah">Utah</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </div>
        <div>
          <select 
            id="stores" 
            name="stores" 
            value={formData.stores} 
            onChange={handleChange} 
          >
            <option>Stores</option>
            <option value="01">1</option>
            <option value="05">2 - 5</option>
            <option value="10">6 - 10</option>
            <option value="15">11 - 15</option>
            <option value="15">15 - 20</option>
            <option value="15">20+</option>
          </select>
        </div>

        <div>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email address" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
        </div>
        <div>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Phone number" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <button className="button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Request Demo"}
        </button>
        {status && <div className="contact-form__response">{status}</div>}
      {loading && <span className="form-spinner"></span>}
    </form>
  );
}
