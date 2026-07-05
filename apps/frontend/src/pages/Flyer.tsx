import Header from "../components/Header";
import Services from "../components/Services";

export default function Flyer() {
  return (
    <div className="border-2 border-black rounded-md p-3 w-3/4 mx-auto mt-10">
      <Header
        customTitle={"Qureshi's Tax Accounting Services"}
        showSAAccounting={false}
        updatedDesc={
          "is here to help you with personalized and reliable services for you, your business, family, and friends"
        }
        showContactButton={false}
      />
      <Services showServiceDetails={false} />
    </div>
  );
}
