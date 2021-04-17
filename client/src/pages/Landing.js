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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra
          sem nunc, in finibus nisl vestibulum at. Suspendisse faucibus laoreet
          lectus. Aenean suscipit dapibus ipsum, eu efficitur purus convallis
          tincidunt. Donec pellentesque est non bibendum molestie. Quisque
          molestie sem vel nibh pharetra lobortis. Pellentesque vestibulum erat
          risus, in condimentum magna vestibulum non. Integer luctus maximus
          tellus ac tempor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Etiam diam mi, volutpat at
          gravida non, rutrum ac eros. Nam vel lorem non ipsum eleifend
          tincidunt id id libero.
        </p>
      </div>
    </div>
  );
};

export default Landing;
