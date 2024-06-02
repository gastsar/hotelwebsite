import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-900/20 p-10 text-slate-800/80  max-md:text-center  justify-around flex gap-4 w-full  ">
      <div className="flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <ul className="flex flex-col gap-2">
          <li>hotel.martigues@gmail.com</li>
          <li>+123-456-7890</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold">Home</h3>
          <ul className="flex flex-col gap-4">
            <li>Services</li>
            <li>Rooms</li>
            <li>About</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Lorem</h3>
          <ul className="flex flex-col gap-4">
            <li>Questions</li>
            <li>Contact</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
