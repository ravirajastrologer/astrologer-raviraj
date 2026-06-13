"use client";

import { FormEvent, useState } from "react";
import { whatsappHref } from "@/app/site-data";

const consultationTypes = [
  "Love & Relationship Guidance",
  "Marriage Consultation",
  "Career Astrology",
  "Business Astrology",
  "Horoscope Reading",
  "Numerology",
  "Spiritual Remedies",
];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const service = formData.get("service")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const whatsappMessage = [
      "Hello Raviraj Gaur,",
      `Name: ${name || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Consultation: ${service || "General inquiry"}`,
      `Message: ${message || "I would like to book a consultation."}`,
    ].join("\n");

    const whatsappUrl = new URL(whatsappHref);
    whatsappUrl.searchParams.set("text", whatsappMessage);

    const popup = window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappUrl.toString();
    }

    setStatus("Your consultation details were sent to WhatsApp.");
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="field">
          <span>Your Name</span>
          <input name="name" type="text" placeholder="Enter your full name" required />
        </label>
        <label className="field">
          <span>Phone / WhatsApp</span>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your contact number"
            required
          />
        </label>
      </div>

      <label className="field">
        <span>Select Service</span>
        <select name="service" defaultValue={consultationTypes[0]}>
          {consultationTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Your Message</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Share your concern, preferred consultation time, or any important details."
          required
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-white/55">
          Submitting this form opens WhatsApp with your prefilled consultation request
          for Raviraj.
        </p>
        <button type="submit" className="button button-primary">
          Submit
        </button>
      </div>

      {status ? <p className="text-sm text-amber-200">{status}</p> : null}
    </form>
  );
}
