import { Header } from "./layout/header";
import { Hero } from "./components/hero";
import { About } from "./components/about/about";
import { Said } from "./components/said";
import { Footer } from "./layout/footer/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero></Hero>
        <About></About>
        <Said />
      </main>
      <Footer />
    </>
  );
}

export default App;
