import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-[var(--bg)]">
        <Header />
        <main className="flex-1">
          <Hero />
          <ArticleCard />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
