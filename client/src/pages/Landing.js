import Navbar from "../components/Navbar";
import logo from "../assets/navbar_logo.png";

const Landing = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <div className="flex flex-col items-center w-full mt-24">
        <img src={logo} alt="Aphrodite.ai" className="w-72" />

        <h1 className="text-5xl mt-10 text-gray-700">About Us</h1>
        <p className="text-center mx-16 mt-4 text-gray-500">
          Aphrodite.ai is a web application linked with a machine learning
          model, which allows for automated analysis of Pap smear images.
          Functions of this service include cell identification, classification
          by five cell types, cell count, and identification of cell clumps,
          which are indicative of cervical cancer. As a healthcare professional,
          you will be able to create an account, create patient profiles, upload
          Pap smear images, and obtain analysis results generated by machine
          learning model. We hope you have a pleasant user experience!
        </p>
      </div>
    </div>
  );
};

export default Landing;