import { useState } from "react";

const Landing = () => {
  const [siteName, setSiteName] = useState("");
  const [siteDomain, setsiteDomain] = useState("");
  const [siteList, setSiteList] = useState([]);

  const handleSiteName = (e) => {
    setSiteName(e.target.value);
  };

  const handleSiteDomain = (e) => {
    setsiteDomain(e.target.value);
  };

  const showSiteName = (e) => {
    e.preventDefault();
    setSiteList((prevSiteList) => ({
      ...prevSiteList,
      [siteName]: siteDomain,
    }));

    // setSiteList([...siteList, siteName]);
    setSiteName(" ");
    setsiteDomain("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-10 ">
        Add Your Fav sites here!
      </h1>
      <form className="text-center max-w-lg mx-auto mt-12" onSubmit={showSiteName}>
        <input
          id="name"
          name="siteName"
          placeholder="Enter site name..."
          value={siteName}
          onChange={handleSiteName}
          className="w-full p-2 pl-4 border border-gray-300 rounded-md"
        />

        <input
          id="domain"
          name="siteDomain"
          placeholder="Add site domain here..."
          value={siteDomain}
          onChange={handleSiteDomain}
          className="w-full p-2 pl-4 border border-gray-300 rounded-md mt-4"
        />

        <button type="submit"
          onClick={showSiteName}
          className="w-full text-white mt-10 p-2 px-10 bg-slate-900 cursor-pointer  rounded-md"
        >
          Add
        </button>
      </form>
      <div className="mt-20 text-center">
        <h3 className="text-indigo-600 bold font-semibold text-lg mb-2">
          Saved Sites
        </h3>

        <ul>
          {Object.keys(siteList).map((key, index) => (
            <div key={index}>
              <h3>{key}</h3>
              <li className="p-2 border-b border-gray-200">
                <a href={siteList[key]} target="_blank">
                  {siteList[key]}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
