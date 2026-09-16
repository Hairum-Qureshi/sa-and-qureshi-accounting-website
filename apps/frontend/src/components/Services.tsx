import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { TbCircleNumber5Filled } from "react-icons/tb";
import { TbCircleNumber6Filled } from "react-icons/tb";
import { TbCircleNumber7Filled } from "react-icons/tb";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: <TbCircleNumber1Filled className="text-green-500" />,
    title: "Preparing and E-filing of Personal Tax Returns",
    description:
      `<ul class="list-disc pl-5"><li>Accurate preparation and e-filing to ensure maximum tax refund allowed by law and ensure peace of mind</li></ul>`,
  },
  {
    icon: <TbCircleNumber2Filled className="text-green-500" />,
    title: "Business & Corporate Tax Filing",
    description:
      `<ul class="list-disc pl-5"><li>Comprehensive business and corporate tax services to keep your business compliant and optimized.</li></ul>`,
  },
  {
    icon: <TbCircleNumber3Filled className="text-green-500" />,
    title: "Payroll Services",
    description:
      `<ul class="list-disc pl-5"><li>Reliable payroll processing to ensure your employees are paid accurately and on time.</li></ul>`,
  },
  {
    icon: <TbCircleNumber4Filled className="text-green-500" />,
    title: "Establishing a New Company",
    description:
      `<ul class="list-disc pl-5"><li>End-to-end guidance to help you start your new business the right way.</li></ul>`,
  },
  {
    icon: <TbCircleNumber5Filled className="text-green-500" />,
    title: "General Business Services",
    description:
      `<ul class="list-disc pl-5"><li>Support for your day-to-day business operations and financial needs.</li></ul>`,
  },
  {
    icon: <TbCircleNumber6Filled className="text-green-500" />,
    title: "Bookkeeping Services",
    description:
      `<ul class="list-disc pl-5"><li>Accurate and timely bookkeeping services to keep your financial records in order and financially efficient.</li></ul>`,
  },
  {
    icon: <TbCircleNumber7Filled className="text-green-500" />,
    title: "Documents Processing",
    description: `<ul class="list-disc pl-5">
    <li>Fast and reliable processing of various documents.</li>
    <li>Professional assistance along with streamlined immigration & passport application processing.</li>
    </ul>`,
  },
];

export default function Services() {
  return (
    <div className="my-10" id="services">
      <h3 className="text-lg font-semibold text-green-500 text-center mt-5">
        SERVICES
      </h3>
      <h1 className="text-2xl font-bold text-center mt-2">How We Can Help</h1>
      <div className="w-10 h-1 bg-green-500 mx-auto mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mx-30 mx-15">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-lg border border-gray-200 transition-shadow duration-300"
          >
            <div className="flex items-center mb-2">
              <span className="text-4xl">{service.icon}</span>
              <h2 className="text-lg font-semibold ml-2">{service.title}</h2>
            </div>
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: service.description }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}
