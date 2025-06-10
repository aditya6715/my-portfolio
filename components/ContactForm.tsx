'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-xl mx-auto p-4">
      <h3 className="text-2xl font-semibold mb-4">Contact Me</h3>
      {submitted ? (
        <p className="text-green-500">Thanks! I’ll get back to you soon.</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          <input type="text" placeholder="Your Name" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <textarea placeholder="Message" required className="w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </form>
      )}
    </section>
  );
}