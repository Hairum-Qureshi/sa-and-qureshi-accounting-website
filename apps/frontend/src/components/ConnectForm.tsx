export default function ConnectForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Your First Name*"
            className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Your Last Name"
            className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <input
        type="email"
        placeholder="Email Address *"
        className="border bg-white border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-col border border-gray-300 active:border-blue-500 rounded focus-within:ring-2 focus-within:ring-blue-500">
        <label className="px-3 py-2 text-gray-500 bg-white">
          Service You Need<span className="text-red-500 ml-1">*</span>
        </label>
        <select className="bg-white px-3 py-2 w-full outline-none focus:outline-none focus:ring-0">
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
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white hover:cursor-pointer px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
