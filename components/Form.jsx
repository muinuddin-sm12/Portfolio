"use client";
import { useState } from "react";
// import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { MailIcon, MessageSquare } from "lucide-react";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const serviceId = "";
    const templateId = "";
    const userId = "";

    emailjs.send(serviceId, templateId, formData, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Failed to send email.");
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-3">
        <div className="relative flex items-center">
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative flex items-center">
          <Input
            type="email"
            id="email"
            placeholder="email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <MailIcon className="absolute right-6" />
        </div>
        <div className="relative flex items-center">
          <Textarea
            id="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <MessageSquare className="absolute top-4 right-6" />
        </div>
        <button type="submit" className="bg-black">
          Send
        </button>
      </div>
    </Form>
  );
};

export default FormComponent;
