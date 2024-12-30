import { useRef } from "react";
import { useState } from "react";

export default function Branches() {
  const branches = {
    "Metro Manila": [
      "SM City North EDSA Annex",
      "Waltermart North EDSA",
      "SMDG M Place",
      "Ayala Malls Cloverleaf, Balintawak",
      "Ayala Malls Vertis North",
      "Ali Mall",
      "Gateway Mall, Cubao",
      "Farmer's Plaza Cubao",
      "Robinsons Magnolia",
      "SM City Sta. Mesa",
      "Sun Residences Mall",
      "Fishermall Quezon Ave.",
      "U.P Town Center, Katipunan",
      "Ever Gotesco Commonwealth",
      "SM Cherry Congressional",
      "SM City Fairview",
      "Fairview Terraces",
      "SM City Novaliches",
      "Kai Mall",
      "Robinsons Novaliches",
      "SM City Valenzuela",
      "Waltermart Junction",
      "SM Light",
      "SM Megamall",
      "Virra Mall Greenhills",
      "Robinsons Galleria",
      "Ayala Mall Feliz",
      "Riverbanks Center",
      "Ayala Malls Marikina Heights",
      "Lucky Chinatown Mall",
      "SM City Manila",
      "Paco Mall",
      "Robinsons Otis",
      "SM Savemore Nagtahan",
      "SM City Grand Central",
      "Waltermart Caloocan",
      "Fishermall Malabon",
      "Ayala Malls Manila Bay",
      "SM City San Lazaro",
      "Cash and Carry",
      "SM Jazz Mall",
      "SM Mall of Asia",
      "Ayala Mall Metropoint",
      "Waltermart Makati",
      "San Lorenzo Mall",
      "Venice Grand Canal Mall",
      "Market! Market!",
      "SM City BF",
      "SM City Bicutan",
      "SM City Sucat",
      "Waltermart Muntinlupa West",
      "SM Center Las Piñas",
      "Robinsons Las Piñas",
      "SM Southmall",
      "Festival Mall Alabang",
    ],
    Luzon: [
      "SM City Baguio",
      "Robinsons Ilocos",
      "Xentro Mall Vigan",
      "Robinsons La Union",
      "SM Center Dagupan",
      "SM City Urdaneta",
      "SM City Rosales",
      "San Carlos Town Center",
      "Robinsons Gapan",
      "SM City Tarlac",
      "SM Center Tuguegarao Downtown",
      "SM City Tuguegarao",
      "Robinsons Tuguegarao",
      "SM City Cauayan",
      "Robinsons Santiago Isabela",
      "Xentro Mall Ilagan",
      "SM Olongapo Central",
      "Harbor Point Subic",
      "Iba Town Center Zambales",
      "Marquee Mall",
      "SM City Pampanga",
      "SM City Telabastagan",
      "Waltermart San Fernando",
      "SM San Fernando Downtown",
      "SM City Clark",
      "Robinsons Starmills",
      "Savemore Apalit",
      "SM City Baliwag",
      "Waltermart Bataan",
      "SM Bataan",
      "SM City Cabanatuan",
      "SM Megacenter Cabanatuan",
      "Waltermart Cabanatuan",
      "SM City Pulilan",
      "SM City Marilao",
      "Robinsons Malolos",
      "SM San Jose Del Monte",
      "Waltermart Baliwag",
      "Waltermart Guiguinto",
      "SM Cherry Antipolo",
      "Robinsons Antipolo",
      "SM City Taytay",
      "SM Center Angono",
      "SM City Masinag",
      "SM City Bacoor",
      "SM City Dasmariñas",
      "Robinsons Dasmariñas",
      "Waltermart Dasmariñas",
      "SM Center Imus",
      "Robinsons Imus",
      "Ayala Malls The District",
      "SM City Molino",
      "SM Trece Martires",
      "Robinsons Gen. Trias",
      "SM Tanza Cavite",
      "SM Rosario",
      "Waltermart Silang",
      "Waltermart Batangas",
      "SM Center Lemery",
      "SM City Lipa",
      "Xentromall Calapan",
      "Waltermart San Pascual",
      "Robinsons Lipa",
      "SM City Legazpi",
      "Pacific Mall Legazpi",
      "LCC Mall Legazpi",
      "SM City Naga",
      "Robinsons Naga",
      "SM City Daet",
      "SM City Sorsogon",
      "SM City Puerto Princesa",
      "Robinsons Palawan",
    ],
    Visayas: [
      "SM City Iloilo",
      "Robinsons Iloilo",
      "Festive Walk Iloilo",
      "Robinson Jaro",
      "Robinsons Pavia",
      "Robinsons Roxas",
      "SM City Roxas",
      "Gaisano Grand Mall Kalibo",
      "SM City Cebu",
      "SM Seaside Cebu",
      "Ayala Malls Cebu",
      "Gaisano Tabunok",
      "Gmall Cebu",
      "SM Consolacion",
      "Robinsons Dumaguete",
      "Alturas Mall",
      "Alta Citta Mall",
      "SM City Bacolod",
      "Ayala Malls Bacolod Central",
      "SM Center Ormoc",
      "Robinsons Ormoc",
      "Savemore Tacloban",
      "Robinsons Tacloban",
      "Gaisano Grand Calbayog",
      "Gaisano Grand Catarman",
      "Gaisano Grand Maasin",
      "Robinsons Antique",
      "Gaisano Grand Antique",
    ],
    Mindanao: [
      "Robinsons Iligan",
      "Robinsons Tagum",
      "Gmall Davao",
      "Gmall Tagum",
      "SM City Davao",
      "SM Lanang Premier",
      "Gmall Digos",
      "Gmall Toril",
      "Ayala Malls Abreeza",
      "Robinsons Butuan",
      "SM City Butuan",
      "City Mall Surigao",
      "Gaisano Mall Kidapawan",
      "Robinsons Valencia",
      "SM Cagayan De Oro Uptown",
      "Limketkai Cdo",
      "SM Mindpro Zamboanga",
      "SM City General Santos",
      "KCC Mall Zamboanga",
    ],
  };
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = () => {
    const term = inputRef.current.value.toLowerCase().trim();
    setSearchTerm(term);
    
    if (!term) {
      setSearchResults([]);
      return;
    }

    // Search through all regions and branches
    const results = [];
    Object.entries(branches).forEach(([region, branchList]) => {
      branchList.forEach(branch => {
        if (branch.toLowerCase().includes(term)) {
          results.push({ region, branch });
        }
      });
    });
    setSearchResults(results);
  };

  // Highlight matching text in branch names
  const highlightText = (text, highlight) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="bg-yellow-200 font-medium">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };




  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Find Us.
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Near You.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Our branches are located in major cities and towns in the
            Philippines. Find a branch near you today!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="relative">
              <label htmlFor="Search" className="sr-only">
                {" "}
                Search{" "}
              </label>

              <input
                ref={inputRef}
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border border-gray-200 py-2.5 px-3 pe-10 shadow-sm sm:text-sm"
              />

              

              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center ">
                <button
                  onClick={handleSearch}
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>

          {searchTerm && (
            <div className="mt-8 text-left bg-white rounded-lg shadow-sm p-4 ">
              <h2 className="font-semibold text-lg mb-2">
                Search Results {searchResults.length > 0 && `(${searchResults.length})`}
              </h2>
              
              {searchResults.length === 0 ? (
                <p className="text-gray-500">No branches found matching &quot;{searchTerm}&quot;</p>
              ) : (
                <ul className="space-y-2">
                  {searchResults.map(({ region, branch }, index) => (
                    <li key={index} className="border-b last:border-0 pb-2">
                      <p className="text-sm text-gray-600">{region}</p>
                      <p className="font-medium">
                        {highlightText(branch, searchTerm)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
        </div>
      </div>
      

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-9 text-center">
        {Object.entries(branches).map(([region, branches]) => (
          <li key={region} className="bg-white p-4 shadow">
            <p className="text-2xl font-bold">{region}</p>
            <ul >
              {branches.map((branch) => (
                <li key={branch} className="text-sm">
                  {branch}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
