import { ThemeProvider } from "./contexts/ThemeContext";
import ArrowsBackdrop from "./components/ArrowsBackdrop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ScrollHint from "./components/ScrollHint";

function App() {
  return (
    <ThemeProvider>
      <ArrowsBackdrop />
      <div className="flex min-h-screen flex-col bg-[var(--bg)]">
        <Header />
        <main className="flex-1">
          <Hero />
          <ArticleCard />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
      <ScrollHint />
    </ThemeProvider>
  );
}

export default App;
