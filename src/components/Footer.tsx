export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100">
      <div className="px-8 py-3 border-b">
        <span className="text-gray-600">United States</span>
      </div>
      <div className="px-8 py-3 flex flex-col sm:flex-row justify-between">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:underline">About</a>
          <a href="#" className="text-gray-600 hover:underline">Advertising</a>
          <a href="#" className="text-gray-600 hover:underline">Business</a>
          <a href="#" className="text-gray-600 hover:underline">How Search works</a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:underline">Privacy</a>
          <a href="#" className="text-gray-600 hover:underline">Terms</a>
          <a href="#" className="text-gray-600 hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
}