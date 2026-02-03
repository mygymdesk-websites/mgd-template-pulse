import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GradientButton from "../ui/GradientButton";
import ScrollReveal from "../shared/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Street", "Mumbai, Maharashtra 400001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99999 99999", "+91 88888 88888"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@pulsefitness.com", "support@pulsefitness.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 5:00 AM - 10:00 PM", "Sunday: 7:00 AM - 8:00 PM"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="GET IN TOUCH"
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-pulse-light rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-pulse-slate mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-pulse-slate mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-pulse-blue/20 focus:border-pulse-blue transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pulse-slate mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-pulse-blue/20 focus:border-pulse-blue transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-pulse-slate mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-pulse-blue/20 focus:border-pulse-blue transition-all"
                      placeholder="+91 99999 99999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pulse-slate mb-2">
                      I'm Interested In
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-pulse-blue/20 focus:border-pulse-blue transition-all"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="">Select an option</option>
                      <option value="membership">Membership</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="group-classes">Group Classes</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pulse-slate mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-pulse-blue/20 focus:border-pulse-blue transition-all resize-none"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <GradientButton className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </GradientButton>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-pulse-light rounded-xl p-5 hover:shadow-card transition-all"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-10 h-10 bg-gradient-pulse rounded-lg flex items-center justify-center mb-3">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-display font-bold text-pulse-slate mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-pulse-light">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
