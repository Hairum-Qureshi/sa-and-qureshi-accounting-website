import { useEffect, useState } from "react";
import axios from "axios";

export default function ConnectForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    axios
      .post(
        "https://formcarry.com/s/D0woayJcIHM",
        {
          firstName,
          lastName,
          email,
          service,
          message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        },
      )
      .then((res) => {
        if (res.data.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.data.message);
        }
      });
  }

  useEffect(() => {
    if (submitted)
      alert("Form submitted successfully! We will get back to you soon.");

    if (error)
      alert("There was an error submitting the form. Please try again later.");
  }, [submitted, error]);

  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <div className="flex gap-4">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Your First Name*"
            className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Your Last Name"
            className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <input
        type="email"
        placeholder="Email Address *"
        className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col border border-gray-300 active:border-blue-500 rounded focus-within:ring-2 focus-within:ring-blue-500">
        <label className="px-3 py-2 text-gray-500 bg-white">
          Service You Need<span className="text-red-500 ml-1">*</span>
        </label>
        <select
          className="bg-white px-3 py-2 w-full outline-none focus:outline-none focus:ring-0"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">--- Select Service ---</option>
          <option value="tax">Tax Preparation</option>
          <option value="accounting">Accounting Services</option>
          <option value="consulting">Business Consulting</option>
        </select>
      </div>
      <div className="flex flex-col border border-gray-300 active:border-blue-500 rounded focus-within:ring-2 focus-within:ring-blue-500">
        <label className="px-3 py-2 text-gray-500 bg-white">
          Message<span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          placeholder="Your Message"
          className="border-0 bg-white rounded px-3 h-32 resize-none outline-none focus:outline-none focus:ring-0"
          maxLength={1000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <p className="text-gray-500 text-sm">
        Message can be up to 1,000 characters.
      </p>
      <button
        type="submit"
        className="bg-blue-500 text-white hover:cursor-pointer px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
