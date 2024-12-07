import { useState } from "react";
import HeroSection from "../components/HeroSection";

const Landing = () => {
  const [url, setUrl] = useState("");
  const [siteList, setSiteList] = useState([]);

  const addNewSite = (e) => {
    e.preventDefault();

    const parsedUrl = new URL(url);
    const domain = parsedUrl.hostname;
    console.log("domain", domain);

    const domainParts = domain.split(".");
    const name = domainParts[0] === "www" ? domainParts[1] : domainParts[0];
    console.log("name", name);

    const favIconUrl = `https://${domain}/favicon.ico`;

    setSiteList((prevSiteList) => [
      ...prevSiteList,
      {
        name,
        domain,
        url,
        favicon: favIconUrl,
      },
    ]);

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

        <div className="flex flex-wrap gap-6 p-4">
          {siteList.map((site) => (
            <div
              key={site.domain}
              className="border px-4 border-gray-900 shadow-md h-[100px] rounded flex  items-center"
            >
              <img
                src={site.favicon}
                alt={`${site.name} Favicon`}
                style={{ width: "46px", height: "46px" }}
              />
              <div>
                <p className="font-bold">{site.name}</p>
                {/* <p>
                  <a href={site.url} target="_blank" rel="noopener noreferrer">
                    {site.url}
                  </a>
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
