export function Welcome() {
  const home =
    'https://termometro.cl/wp-content/uploads/2020/05/Flag_of_Club_de_Deportes_Antofagasta_Chile.png';

  const away =
    'https://i.pinimg.com/736x/6f/55/ae/6f55ae88b63ce699cc6a6195b1db5614.jpg';

  const sponsorLeft =
    'https://parnes.cl/wp-content/uploads/2021/04/minera-escondida.png';
  const sponsorRight =
    'https://media.licdn.com/dms/image/v2/C4E1BAQGaZgg_7t0UmQ/company-background_10000/company-background_10000/0/1584448491829/radio_carnaval_antofagasta_cover?e=2147483647&v=beta&t=FGLKdYNvqwG1_0ES1jA5CAWQttbZR5gmHEs2IfJW5I8';

  return (
    <div className="h-[1080px] w-[1920px] bg-gray-100 flex flex-col relative">
      {/* Top Section */}
      <div className="flex w-full flex-grow relative">
        {/* Left Team Section */}
        <div
          className="w-1/2 bg-green-700 flex items-center justify-center"
          style={{
            backgroundImage: `url(${home})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>

        {/* Right Team Section */}
        <div
          className="w-1/2 bg-green-700 flex items-center justify-center"
          style={{
            backgroundImage: `url(${away})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>

        {/* Score Section */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-white flex z-10 shadow-lg rounded-2xl"
          style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}
        >
          {/* Left Team Score */}
          <div className="w-1/2 h-full bg-white flex items-center justify-center border-r border-gray-400 rounded-l-2xl">
            <div className="text-black text-9xl font-bold">1</div>
          </div>
          {/* Right Team Score */}
          <div className="w-1/2 h-full bg-white flex items-center justify-center rounded-r-2xl">
            <div className="text-black text-9xl font-bold">0</div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex w-full h-[150px]">
        {/* Left Sponsor Section */}
        <div className="w-1/2 bg-white flex items-center justify-center border-t border-gray-300">
          <img
            src={sponsorLeft}
            alt="Sponsor Left"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right Sponsor Section */}
        <div className="w-1/2 bg-white flex items-center justify-center border-t border-gray-300">
          <img
            src={sponsorRight}
            alt="Sponsor Right"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
