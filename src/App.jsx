import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

 

function App() { 

  return <> 
    
    <div className="fix -z-10 min-h-screen w-full  
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
       
       
    <Navbar />
    <Hero />
       <Skills />
       <Projects />
       <Contacts />
       </main>
  </div>
    </>;
  
}

export default App;
