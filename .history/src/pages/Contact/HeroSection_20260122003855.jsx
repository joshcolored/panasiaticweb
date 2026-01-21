import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");


    

    try {
      const res = await fetch("https://www.panasiaticsolutions.com/contact-send.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: phone,
          message: form.message,
        }),
      });
      console.log(form);
      const data = await res.json();

     
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        setPhone("");
      } else {
      
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact PanAsiatic
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We'd love to hear from you. Whether you're exploring outsourcing
              options or looking to partner with us, just fill out the form
              below and our team will be in touch.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8]"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8]"
              />

              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "0.75rem",
                  paddingLeft: "60px",
                  border: "1px solid #E5E7EB",
                  fontSize: "1rem",
                  color: "#111827",
                }}
                buttonStyle={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.75rem 0 0 0.75rem",
                  height: "56px",
                  marginLeft: "0",
                }}
                dropdownStyle={{
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                }}
                containerStyle={{ width: "100%" }}
                specialLabel={""}
              />
            </div>

            <textarea
              rows={5}
              name="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#49ade8]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#49ade8] hover:bg-[#3a8ad1] text-white font-medium py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {status && (
              <p className="text-center text-sm text-gray-600 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="hidden lg:block">
          <img
            src="/images/contactImg.png"
            alt="PanAsiatic contact center team with headsets"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
