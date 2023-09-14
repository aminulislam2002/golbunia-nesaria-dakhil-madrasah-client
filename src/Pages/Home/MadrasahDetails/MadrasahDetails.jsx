const MadrasahDetails = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-green-800 md:p-4">
        <h1 className="text-xs md:text-2xl text-white text-center uppercase">EIIN</h1>
        <h1 className="text-xs md:text-xl text-white text-center">102671</h1>
      </div>
      <div className="bg-green-700 md:p-4">
        <h1 className="text-xs md:text-2xl text-white text-center uppercase">Madrasah Code</h1>
        <h1 className="text-xs md:text-xl text-white text-center">19801</h1>
      </div>
      <div className="bg-green-800 md:p-4">
        <h1 className="text-xs md:text-2xl text-white text-center uppercase">Center Code</h1>
        <h1 className="text-xs md:text-xl text-white text-center">N/A</h1>
      </div>
      <div className="bg-green-700 md:p-4">
        <h1 className="text-xs md:text-2xl text-white text-center uppercase">Estd Year</h1>
        <h1 className="text-xs md:text-xl text-white text-center">1984</h1>
      </div>
    </div>
  );
};

export default MadrasahDetails;
