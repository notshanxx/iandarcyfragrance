export default function Variants() {
  const scents = {
    women: [
      "Amethyste",
      "B.Crystal",
      "B.Weekend",
      "Cancan",
      "Coral",
      "D&G L.blue",
      "Eclat",
      "EnglishPear",
      "Incanto",
      "PinkSaphire",
      "Nectarine Blossom",
      "MoonSparkle",
      "Bombshell",
      "MEOW K.Perr",
      "Sweet like",
      "V.Petals",
      "Crystalline",
      "Cloud A.Gra",
      "Santal33",
      "A.Gra Pink",
      "Miss Dior"
    ],
    men: [
      "AquaDiGio",
      "BvlExtreme",
      "Chanel Bleu",
      "C.Happy",
      "Cool Water",
      "Eclat",
      "Eros",
      "Hugo Boss",
      "LacosteRed",
      "L.White",
      "Mont Blanc",
      "Polo Sport",
      "C.Klein Be",
      "F.Fabulous",
      "DiorSauvage",
      "L. Black"
    ],
    littledarcy: [
      "Velvet Kisses",
      "Pink Lullaby",
      "Huggable",
      "Blue",
      "Irresistible",
      "Teal",
      "Purple Harmony",
      "Yellow Fantasy",
      "Tickle",
      "Tangerine"
    ]
  };
  return (

    <>  
    <div>
      <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl" data-aos="fade-up">Scents</h1>
        <p className="text-center mt-4 text-gray-500" data-aos="fade-up" data-aos-delay="100">
          Inspired by different scents from around the world.
        </p>
      </div>
      
      <div id="iandarcy-men" className="flex flex-col justify-center gap-4 min-h-screen">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center" data-aos="fade-up" >Ian Darcy Men</h2>
        <p className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="150">
          High quality, long-lasting scents inspired by designer perfumes.
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2 mx-auto">
          {scents.men.map((scent) => (
            <li key={scent} data-aos="fade-up" data-aos-delay={(scent.length % 3) * 200} className="hover:underline text-center">{scent}</li>
          ))}
        </ul>
      </div>

      <div id="iandarcy-women" className="flex flex-col justify-center gap-4 min-h-screen">
        <h2 className="font-bold text-gray-900 text-3xl text-center" data-aos="fade-up" >Ian Darcy Women</h2>
        <p className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="150">
          Fresh, elegant, and sophisticated scents inspired by designer perfumes.
        </p>
        
        <ul className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2 mx-auto">
          {scents.women.map((scent) => (
            <li key={scent} data-aos="fade-down" data-aos-delay={(scent.length % 3) * 200} className="hover:underline text-center">{scent}</li>
          ))}
        </ul>
      </div>

      <div id="littledarcy" className="flex flex-col justify-center gap-4 min-h-screen">
        <h2 className="font-bold text-gray-900 text-3xl text-center" data-aos="fade-up" >Little Darcy</h2>
        <p className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="150">
          Fragrances for the little ones, inspired by designer perfumes.
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-1/2 mx-auto">
          {scents.littledarcy.map((scent) => (
            <li key={scent} data-aos="fade-up" data-aos-delay={(scent.length % 3) * 200} className="hover:underline text-center">{scent}</li>
          ))}
        </ul>
      </div>

    </div>
    </>
    
  );
}
