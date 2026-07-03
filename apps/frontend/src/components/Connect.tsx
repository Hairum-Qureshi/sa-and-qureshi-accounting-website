import { Link } from "react-router-dom";
import ConnectForm from "./ConnectForm";

export default function Connect() {
  return (
    <div className="lg:flex p-20 bg-green-100" id="connect">
      <div className="lg:w-1/2 w-full">
        <h3 className="text-lg font-semibold text-green-500 mt-5">
          LET'S CONNECT
        </h3>
        <h1 className="text-3xl font-bold mt-2">We'd love to help you out!</h1>
        <div className="w-1/4 text-center h-1 bg-green-500 mt-2" />
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-green-500 mt-5">
            CONTACT INFORMATION
          </h3>
          <div className="flex items-center gap-2 mt-4">
            <div>
              <p>Shahid Sheikh</p>
              <p>(302)-397-7448</p>
              <p>saaccounting.us@yahoo.com</p>
              <Link
                to="https://saaccounting-us.com"
                className="cursor-pointer hover:underline hover:text-green-800"
              >
                saaccounting-us.com
              </Link>
              <p className="text-gray-500 text-sm">Accountant</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div>
              <p>Saqlain Muhammad Qureshi</p>
              <p>(302)-465-6450</p>
              <p>qureshis.tax.services@gmail.com</p>
              <Link
                to="https://qureshis-tax-services.com"
                className="cursor-pointer hover:underline hover:text-green-800"
              >
                qureshis-tax-services.com
              </Link>
              <p className="text-gray-500 text-sm">Tax Preparer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-20 mt-10 lg:mt-0">
        <h3 className="text-xl font-semibold mt-5 mb-3">Send us a message</h3>
        <p className="text-gray-500 text-base mb-5">
          Have a question or need assistance? Fill out the form below and we'll
          get back to you as soon as possible.
        </p>
        <ConnectForm />
      </div>
    </div>
  );
}
