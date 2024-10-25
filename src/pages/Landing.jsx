import { useState } from "react";

const Landing = () => {
  const [siteName, setSiteName] = useState("");
  const [siteList, setSiteList] = useState([]);

  const handleSiteName = (e) => {
    setSiteName(e.target.value);
  };

  const showSiteName = () => {
    setSiteList([...siteList, siteName]);
    setSiteName(" ");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-10">
        Add Your Fav sites here!
      </h1>
      <div className="text-center">
        <input
          id="siteName"
          name="domain"
          placeholder="Add site domain here..."
          value={siteName}
          onChange={handleSiteName}
          className="w-1/2 mx-auto mt-10 p-2 pl-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={showSiteName}
          className="text-white p-2 px-10 bg-slate-900 cursor-pointer ml-2 rounded-md"
        >
          Add
        </button>
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-indigo-600 bold font-semibold text-lg mb-2">
          Saved Sites
        </h3>

        <ul>
          {siteList.map((site, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              {site}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Landing;
