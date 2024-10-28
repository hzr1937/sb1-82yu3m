import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="w-72 mb-8"
          />
          <SearchBar />
          <div className="mt-8 text-sm">
            <span className="text-gray-600">Google offered in: </span>
            <a href="#" className="text-blue-600 hover:underline">Español</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;