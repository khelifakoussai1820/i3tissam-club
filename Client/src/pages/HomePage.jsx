import Header from "../components/Header"
import HeroSection from "../components/HeroSection"


function HomePage() {
  return (
    <>
        <div className="mt-2 mx-32 min-h-screen rounded-full">
            <Header/>
            
            
            <div className="mt-44">
              <HeroSection />
            </div>
        </div>
    </>
  )
}

export default HomePage
