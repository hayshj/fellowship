import Navbar from "../components/BlackNavbar"
import Logo from "../assets/gathering/the-gathering-logo.png"

function Gathering() {
    return(
        <div>  
            <Navbar />
            <div className="pt-20 min-h-screen max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 py-8 text-center lg:text-left">
                    <img src={Logo} alt="The Gathering Logo" className="w-[200px] h-auto object-contain" />

                    <div className="text-2xl text-neutral-700 font-semibold">
                        HER STORY.
                        <br className="hidden lg:block" />
                        HIS GLORY.
                    </div>

                    <div className="text-2xl text-neutral-700 font-semibold">
                        September 13, 2025
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gathering