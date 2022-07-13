import { useState } from 'react'

export default function Home() {

const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmitForm = async (e) => {
		e.preventDefault()

		if (inputs.name && inputs.email && inputs.message) {
			setForm({ state: 'loading' })
			try {
				const res = await fetch(`api/contact`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				})

				const { error } = await res.json()

				if (error) {
					setForm({
						state: 'error',
						message: error,
					})
					return
				}

				setForm({
					state: 'success',
					message: 'Your message was sent successfully.',
				})
				setInputs({
					name: '',
					email: '',
					message: '',
				})
			} catch (error) {
				setForm({
					state: 'error',
					message: 'Something went wrong',
				})
			}
		}
	}

const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
};

  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
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
    <section id="structure" className="pt-36 pb-32 bg-slate-700">
        <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2">Organizational Structure
                </h4>
                <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
                    Organization and Work
                    Procedures of SMTI</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Peraturan Menteri
                    Perindustrian Nomor
                    77/M-IND/PER/8/2011
                </p>
            </div>
        </div>
        <div className="w-full px-4">
            <div className="flex flex-wrap justify-center">
                <div
                    className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src="/images/teachers/buening.png" alt="1" />
                    <p className="text-center pt-4 text-white">RR. Ening Kaekasiwi<br/><span className="text-sm">Kepala
                            Sekolah</span></p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div
                    className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src="/images/teachers/buros.png" alt="1" />
                    <p className="text-center pt-4 text-white">Rosnida Nurhayati<br/><span className="text-sm">Mutu Pendidikan,
                            ZI,
                            SPIP</span></p>
                </div>
                <div
                    className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src="/images/teachers/pakagung.png" alt="1" />
                    <p className="text-center pt-4 text-white">Agung Andanatapa<br/><span className="text-sm">Monitoring
                            Evaluasi</span></p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div
                    className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src="/images/teachers/butriana.png" alt="1" />
                    <p className="text-center pt-4 text-white">Triana Quari S.<br/><span className="text-sm">LSP</span></p>
                </div>
                <div
                    className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                    <img src="/images/teachers/bufrida.png" alt="1" />
                    <p className="text-center pt-4 text-white">Frida Suteki<br/><span className="text-sm">Kasubag TU</span></p>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/buumi.png" alt="1" />
                <p className="text-center pt-4 text-white">Umi Masruroh<br/><span className="text-sm">Kaur Keuangan</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/buendang.png" alt="1" />
                <p className="text-center pt-4 text-white">Endang Sundari<br/><span className="text-sm">Kaur Kepegawaian</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakyohanes.png" alt="1" />
                <p className="text-center pt-4 text-white">Yohanes Sukardi<br/><span className="text-sm">Kaur Rumah Tangga</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakbambang.png" alt="1" />
                <p className="text-center pt-4 text-white">Bambang Ismadi<br/><span className="text-sm">Pengelola Arsip</span>
                </p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakridwan.png" alt="1" />
                <p className="text-center pt-4 text-white">Ridwan<br/><span className="text-sm">Waka
                        Kurikulum</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/buendah.png" alt="1" />
                <p className="text-center pt-4 text-white">Endah Yuli Astanti<br/><span className="text-sm">Waka Kesiswaan</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/bufitri.png" alt="1" />
                <p className="text-center pt-4 text-white">Fitri Ismiani Hapsari<br/><span className="text-sm">Waka Humas</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakikhsan.png" alt="1" />
                <p className="text-center pt-4 text-white">Ikhsanuddin Setya N.<br/><span className="text-sm">Waka Sarpras</span>
                </p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/paksriyono.png" alt="1" />
                <p className="text-center pt-4 text-white">Sriyono Poerwanto<br/><span className="text-sm">Kaur Kimia
                        Industri</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/paksulis.png" alt="1" />
                <p className="text-center pt-4 text-white">Sulistyo<br/><span className="text-sm">Kaur OSIS</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/bumerry.png" alt="1" />
                <p className="text-center pt-4 text-white">Merry Pradhita<br/><span className="text-sm">Pengelola Pemasaran
                        Lulusan &
                        Prakerin</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/burevi.png" alt="1" />
                <p className="text-center pt-4 text-white">Revi Yanuarti<br/><span className="text-sm">Pengelola BMN</span></p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/budianita.png" alt="1" />
                <p className="text-center pt-4 text-white">Dianita Indrawati<br/><span className="text-sm">Kaur Kimia
                        Analisis</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakkas.png" alt="1" />
                <p className="text-center pt-4 text-white">Kasnama<br/><span className="text-sm">Kaur
                        Ekskul & UKS</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/buidelia.png" alt="1" />
                <p className="text-center pt-4 text-white">Idelia Trisnaningtyas<br/><span className="text-sm">Pengelola PPID &
                        Medsos</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/bunur.png" alt="1" />
                <p className="text-center pt-4 text-white">Nur Ida Vetriana<br/><span className="text-sm">Pranata Lab.
                        Pendidikan</span></p>
            </div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakbowo.png" alt="1" />
                <p className="text-center pt-4 text-white">M. Agung Wibowo<br/><span className="text-sm">Kaur Teknik
                        Mekatronika</span></p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/pakanto.png" alt="1" />
                <p className="text-center pt-4 text-white">Dwi Maryanto<br/><span className="text-sm">Kaur Kedisiplinan &
                        BK</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/paksarman.png" alt="1" />
                <p className="text-center pt-4 text-white">Sarman<br/><span className="text-sm">Pengembangan Karir &
                        Kerjasama</span>
                </p>
            </div>
            <div
                className="max-w-[120px] mx-4 py-4 opacity-50 hover:scale-125 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <img src="/images/teachers/buismi.png" alt="1" />
                <p className="text-center pt-4 text-white">Ismi Tri Wulandari<br/><span className="text-sm">Kaur
                        Perpustakaan</span>
                </p>
            </div>
        </div>
    </section>
    <section id="structure" className="pb-32 bg-slate-700">
        <div className="container">
            <div className="w-full px-4">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div
                        className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-slate-200 border border-gray-200">
                        <h2 className="accordion-header mb-0" id="flush-headingThree">
                            <button
                                className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-slate-200 border-0 rounded-none transition focus:outline-none"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                To View The List of Teachers, Please Click Here...
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body py-4 px-5">
                                <img src="/images/teachers/listguru.png" alt="listguru" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="facilities" className="pb-32 pt-32 bg-slate-100">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Facilities</h4>
                    <p className="font-medium text-md text-secondary md:text-lg">Facilities of SMTI Yogyakarta</p>
                </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                        aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                        aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8"
                        aria-label="Slide 9"></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/labkimiaindustri.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Lab. Kimia Industri</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/labkimiaanalis.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Lab. Kimia Analisis</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/labmekatronika.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Lab. Mekatronika</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/cinema.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Cinema Room</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/lapangan.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Basketball Court</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/perpus.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Library</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/uks.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Health Unit</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/aula.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Hall</h5>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
                            <img src="/images/facilities/taman.png" className="block w-full" />
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-50">
                            </div>
                        </div>
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Garden</h5>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <section id="achievements" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Achievements</h4>
                    <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Karya Ilmiah Remaja</h2>
                    <p className="font-medium text-md text-secondary md:text-lg">Karya Ilmiah Remaja (KIR) SMK SMTI
                        Yogyakarta often wins youth scientific work competitions, here are some examples
                    </p>
                </div>

            </div>
            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (1).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (2).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (3).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (4).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (5).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (6).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (7).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (8).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (9).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (10).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (11).jpg" alt="1" />
                    </div>
                    <div
                        className="max-w-[250px] mx-4 hover:z-10 hover:scale-150 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                        <img src="/images/kir/kir (12).jpg" alt="1" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" className="pt-24 pb-12">
        <div className="container">
            <div className="max-w-xl mx-auto text-center">
                <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Contact Me</h2>
                <p className=" font-medium text-md text-secondary md:text-lg">If you want to tell me something, please
                    contact me 😊</p>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-6">
                    <div className="flex flex-col items-center">
                        <div className="pt-16 pb-12">
                            <img src="/images/profilearya.jpg" alt="profile" className="rounded-full w-40 h-40"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary text-center mb-5"> Salih Arya Gumilang
                            </h2>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 text-center">
                            <h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">You can call me arya!
                            </h2>
                            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Hello, my name is Salih
                                Arya Gumilang. I was
                                born in Surakarta, January 2001. I am currently studying at UAD Yogyakarta
                                majoring in Informatics Engineering</p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="flex items-center justify-center">
                                <a href="https://www.linkedin.com/in/aryagumilang" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>LinkedIn</title>
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <title>Facebook</title>
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </a>
                                <a href="https://www.facebook.com/arya2001/" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 mr-3 rounded-full
                                                            flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Facebook</title>
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/saliharya/" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Instagram</title>
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col items-center">
                        <div className="pt-16 pb-12">
                            <img src="/images/profilereza.jpeg" alt="profile" className="rounded-full w-40 h-40"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-primary text-center mb-5"> Reza Sefiyanti
                            </h2>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 text-center">
                            <h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">You can call me Reza!
                            </h2>
                            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Hello, my name is Reza
                                Sefiyanti. I
                                was
                                born in Sukajaya, September 2003. I am currently studying at UAD Yogyakarta
                                majoring in Informatics Engineering</p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="flex items-center justify-center">
                                <a href="https://www.facebook.com/ezha.sefiyanty" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 mr-3 rounded-full
                                                                            flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Facebook</title>
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="http://instagram.com/reza_sfxyzz" target="_blank" rel="noopener noreferrer"
                                    className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                                    <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Instagram</title>
                                        <path
                                            d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    </section>
    <section className="pb-32">
        <div className="container">
            <div className="w-full px-4">
            </div>
            <form onSubmit={(e) => onSubmitForm(e)}>
                <div className="w-full lg:w-2/3 lg:mx-auto">
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                        <input type="text" onChange={handleChange} value={inputs.name} id="name" name="name"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary"/>
                    </div>
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="Email" className="text-base text-primary font-bold">Email</label>
                        <input type="email" onChange={handleChange} value={inputs.email} id="email" name="email"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary"/>
                    </div>
                    <div className="w-full mb-8 px-4">
                        <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                        <textarea type="text" onChange={handleChange} value={inputs.message} id="message" name="message"
                            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus: border-primary h-32"></textarea>
                    </div>
                    <div className="w-full">
                        <button type="submit" value="submit"
                            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">SEND
                            {form.state === 'loading' ? (
					<div>Sending....</div>
				) : form.state === 'error' ? (
					<div>{form.message}</div>
				) : (
					form.state === 'success' && <div>Sent successfully</div>
				)}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <footer className="bg-dark pt-10 pb-12">
        <div className="container">
            <div className="w-full pt-10 border-t border-slate-700">
                <p className="font-medium text-xs text-slate-500 text-center">Web Developers : <a
                        href="https://www.instagram.com/saliharya/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary">Salih
                        Arya Gumilang</a> & <a href="http://instagram.com/reza_sfxyzz" target="_blank" rel="noopener noreferrer"
                        className="font-bold text-primary">Reza Sefiyanti</a></p>
            </div>
        </div>
    </footer>
    </>
  )
}