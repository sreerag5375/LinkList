import { useState } from "react";
import HeroSection from "../components/HeroSection";

const Landing = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [favicon, setFavicon] = useState("");
  const [siteList, setSiteList] = useState([]);

  const addNewSite = (e) => {
    e.preventDefault();

    const parsedUrl = new URL(url);
    const domain = parsedUrl.hostname;
    setName(domain);

    const favIconUrl = `https://${domain}/favicon.ico`;
    setFavicon(favIconUrl);

    setSiteList((prevSiteList) => ({
      ...prevSiteList,
      [domain]: url,
    }));

    setUrl("");
  };

  return (
    <div className="app">
      <div className="hero-section | flex justify-around border-b-2">
        <HeroSection />

        <div className="add-form">
          <form
            className="text-center max-w-lg mx-auto mt-12"
            onSubmit={addNewSite}
          >
            {/* <input
              id="name"
              name="siteName"
              placeholder="Enter site name..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full p-2 pl-4 border border-gray-300 rounded-md"
            /> */}

            <input
              id="domain"
              name="siteDomain"
              placeholder="Add site domain here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              className="w-full p-2 pl-4 border border-gray-300 rounded-md mt-4"
            />

            <button
              type="submit"
              onClick={addNewSite}
              className="w-full text-white mt-6 p-2 px-10 bg-slate-900 cursor-pointer  rounded-md"
            >
              Add
            </button>
          </form>
          <div className="hero-image flex-1 text-right">
            <img
              src="src/assets/thinking.svg"
              alt="hero"
              className="inline-block max-w-[80%] pt-8 "
            />
          </div>
        </div>
      </div>
      <div className="mt-14 text-center mb-24">
        <h2 className="bold font-semibold text-2xl mb-2 tracking-widest">
          COLLECTIONS
        </h2>

        <ul>
          {Object.keys(siteList).map((key, index) => (
            <div key={index}>
              {/* <h3>{key}</h3> */}
              <div className="p-2 border-b border-gray-200">
                {/* <a href={siteList[key]} target="_blank">
                  {siteList[key]}
                </a> */}
                <img
                  src={favicon}
                  alt={`${name} Favicon`}
                  style={{ width: "32px", height: "32px" }}
                />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
