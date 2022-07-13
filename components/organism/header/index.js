import { useState } from 'react'

export default function Header() {
const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
};

  return (
    <>
          <div id="home"></div>
    <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    </div>
                    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-100 navbar-fixed">
                        <div className="container">
                            <div className="flex relative">
                                <div className="px-4">
                                    <a href="#home"
                                        className="text-bold text-lg text-primary block py-6 lg:text-sm text-center">Tailwind
                                        Team</a>
                                </div>
                                <div className="flex items-center px-4">
                                    <button id="hamburger" onClick={handleToggle} name="hamburger" type="button"
                                        className={`block absolute right-4 lg:hidden ${isActive ? "hamburger-active" : ""}`}>
                                        <span
                                            className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                        <span
                                            className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                                    </button>
                                    <nav id="nav-menu" onClick={handleToggle}
                                        className={`absolute py-5 bg-white shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isActive ? "" : "hidden"}`}>
                                        <ul className="block lg:flex">
                                            <li className="group">
                                                <a href="#home"
                                                    className="text-base text-dark py-2 mx-5 flex group-hover:text-primary">Home</a>
                                            </li>
                                            <li className="group">
                                                <a href="#structure"
                                                    className="text-base text-dark py-2 mx-5 flex group-hover:text-primary">Teachers</a>
                                            </li>
                                            <li className="group">
                                                <a href="#facilities"
                                                    className="text-base text-dark py-2 mx-5 flex group-hover:text-primary">Facilities</a>
                                            </li>
                                            <li className="group">
                                                <a href="#achievements"
                                                    className="text-base text-dark py-2 mx-5 flex group-hover:text-primary">Achievements</a>
                                            </li>
                                            <li className="group">
                                                <a href="#contact"
                                                    className="text-base text-dark py-2 mx-5 flex group-hover:text-primary">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="container">
                        <img src="/images/SMTI.png" alt="logo-smti"
                            className="max-w-xs mx-auto items-center pb-12 pt-12"/>
                        <div className="sm:text-center lg:text-left">
                            <h1
                                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-12">
                                <span className="block xl:inline">SMK SMTI Yogyakarta</span>
                                <span className="block text-primary xl:inline">Profile</span>
                            </h1>
                            <p
                                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Formal vocational education in
                                industrial technology for graduates of Junior High School (SLTP) in accordance with
                                statutory regulations, to produce intermediate technology experts in the industrial
                                sector
                                by
                                using laboratories,
                                workshops and other facilities.</p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <p className="text-400 mb-1 leading-relaxed">Jalan Kusumanegara No. 3 RT. 25 RW. 7 Semaki,
                                    Umbulharjo,
                                    Yogyakarta, D.I.Yogyakarta 55166</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/parallex.png"
                alt=""/>
        </div>
    </div>
    </>
  )
}