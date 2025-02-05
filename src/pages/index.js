import { Poppins } from "next/font/google";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [socket, setSocket] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const socketInstance = io(
      "https://mobily-backend-production.up.railway.app/",
      {
        transports: ["websocket", "polling"], // Allow WebSocket and polling
        withCredentials: true, // Ensures CORS works properly
      }
    );
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleMenuClick = (url) => {
    if (socket) {
      console.log("Emitting navigate with link:", url);
      socket.emit("navigate", { link: url });
    } else {
      console.log("Socket not initialized yet");
    }
  };
  return (
    <div className="bg-[#050e59] w-full h-[100vh] overflow-hidden">
      <div
        className="text-[32px] flex gap-[8px] cursor-pointer items-center"
        onClick={() => handleMenuClick("/home")}
      >
        <button className="w-[200px] z-30 rounded-lg bg-[#edf7ff] text-black ml-[200px] mt-[40px] ">
          Home
        </button>
      </div>
      <div className="flex justify-between items-center w-full h-full text-white p-20">
        <div className="ml-28 pb-9 mt-10 overflow-y-auto flex items-center h-full z-10">
          <div className="flex flex-col w-full gap-[20px]">
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer relative items-center"
              onClick={() => handleDropdownToggle("terrestrial")}
            >
              <img
                src="/menuicon/map.svg"
                alt="map icon"
                className="w-[60px]"
              />{" "}
              <span className="ml-2 w-[450px]">
                Terrestrial & Cross Borders
              </span>
              <button>{activeDropdown === "terrestrial" ? "▼" : "▲"}</button>
            </div>
            {activeDropdown === "terrestrial" && (
              <div className="pl-[40px] mt-2 p-2 rounded transition-all duration-300 ease-in-out ml-[60px]">
                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/terrestrial-ksa")}
                >
                  {"KSA Terrestrial"}
                </div>
                <div
                  className="text-[24px] cursor-pointer"
                  onClick={() => handleMenuClick("/terrestrial-border")}
                >
                  {"Border Interconnect Point"}
                </div>
              </div>
            )}
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer items-center"
              onClick={() => handleMenuClick("/data-centers")}
            >
              <img
                src="/menuicon/datacenter.svg"
                alt="data center"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Data Centers</span>
            </div>
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer items-center"
              onClick={() => handleMenuClick("/landing-stations")}
            >
              <img
                src="/menuicon/landingstation.svg"
                alt="landing station"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Landing Stations</span>
            </div>
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer items-center"
              onClick={() => handleMenuClick("/global-points")}
            >
              <img
                src="/menuicon/globalpoints.svg"
                alt="global points"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Global Points of Presence</span>
            </div>
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer items-center"
              onClick={() => handleMenuClick("/towers")}
            >
              <img
                src="/menuicon/towers.svg"
                alt="towers"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Towers</span>
            </div>
            <div
              className="text-[32px] flex gap-[8px] cursor-pointer relative items-center"
              onClick={() => handleDropdownToggle("jedddah_exchange")}
            >
              <img
                src="/menuicon/equinix.svg"
                alt="equinix"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">
                Equinix Jeddah Internet Exchange
              </span>
              <button>
                {activeDropdown === "jedddah_exchange" ? "▼" : "▲"}
              </button>
            </div>
            {activeDropdown === "jedddah_exchange" && (
              <div className="pl-[40px] mt-2 p-2 rounded transition-all duration-300 ease-in-out ml-[60px]">
                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/jedddah_exchange-internet")}
                >
                  {"Internet Exchange"}
                </div>
                <div
                  className="text-[24px] cursor-pointer"
                  onClick={() => handleMenuClick("/jedddah_exchange-ecosystem")}
                >
                  {"Exchange Ecosystem"}
                </div>
              </div>
            )}

            <div
              className="text-[32px] flex gap-[8px] cursor-pointer relative items-center"
              onClick={() => handleDropdownToggle("submarine")}
            >
              <img
                src="/menuicon/submarine.svg"
                alt="equinix"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Submarine Cable System</span>
              <button>{activeDropdown === "submarine" ? "▼" : "▲"}</button>
            </div>
            {activeDropdown === "submarine" && (
              <div className="pl-[40px] mt-2 p-2 rounded transition-all duration-300 ease-in-out ml-[60px]">
                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-home")}
                >
                  {"Home"}
                </div>
                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-aae1")}
                >
                  {"AAE1 Cable"}
                </div>
                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-africa1")}
                >
                  {"Africa1"}
                </div>

                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-eurasia")}
                >
                  {"TGN – Eurasia Cable"}
                </div>

                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-smw")}
                >
                  {"SMW6"}
                </div>

                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-tgn")}
                >
                  {"TGN-Gulf Cable"}
                </div>

                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-rcn")}
                >
                  {"RCN"}
                </div>

                <div
                  className="text-[24px] cursor-pointer mb-4"
                  onClick={() => handleMenuClick("/submarine-mobily")}
                >
                  {"Mobily New Cable"}
                </div>
              </div>
            )}

            <div
              className="text-[32px] flex gap-[8px] cursor-pointer items-center"
              onClick={() => handleMenuClick("/internet-gateways")}
            >
              <img
                src="/menuicon/internet.svg"
                alt="internet gateways"
                className="w-[60px]"
              />
              <span className="ml-2 w-[450px]">Internet Gateways</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 ">
          <video autoPlay loop playsInline muted>
            <source src="/bgvideo.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
