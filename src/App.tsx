import Hero from './sections/Hero';
import Intro from './sections/Intro';
import ImageTools from './sections/ImageTools';
import VideoTools from './sections/VideoTools';
import CreativeFlow from './sections/CreativeFlow';
import VisualStyles from './sections/VisualStyles';
import VisualGlossary from './sections/VisualGlossary';
import ImagePrompts from './sections/ImagePrompts';
import VideoPrompts from './sections/VideoPrompts';
import AIDirector from './sections/AIDirector';
import AIAssistants from './sections/AIAssistants';
import Insights from './sections/Insights';
import WhatsNew from './sections/WhatsNew';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-concafras-dark text-gray-200 overflow-x-hidden">
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <Intro />
      <ImageTools />
      <VideoTools />
      <CreativeFlow />
      <AIAssistants />
      <Insights />
      <VisualStyles />
      <VisualGlossary />
      <ImagePrompts />
      <VideoPrompts />
      <AIDirector />
      <WhatsNew />
      <Footer />
    </div>
  );
}

export default App;
