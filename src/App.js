import "./App.css";
import InvoiceDetails from "./components/InvoiceDetails";
import InvoicePreview from "./components/InvoicePreview";
import { InvoiceProvider } from "./context/InvoiceContext";

function App() {
  return (
    <InvoiceProvider>
      <div className="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64">
        <nav id="page-sidebar" className="flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-sidebar-light border-r border-gray-200 z-50 transform transition-transform duration-500 ease-out -translate-x-full lg:translate-x-0 bg-gray-50" aria-label="Main Sidebar Navigation">
          <div className="h-16 flex-none flex items-center justify-between lg:justify-center px-4 w-full">
            <a href="javascript:void(0)" className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-600 hover:text-gray-500">
              <svg className="hi-solid hi-cube-transparent inline-block w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Invoice</span>
            </a>

            <div className="lg:hidden">
              <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:text-red-600">
                <svg className="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-y-auto">
            <div className="p-4 w-full">
              <nav className="space-y-1">
                <InvoiceDetails />
              </nav>
            </div>
          </div>
        </nav>
        <header id="page-header" className="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30 lg:pl-64">
          <div className="flex justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center space-x-2">
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                >
                  <svg className="hi-solid hi-search inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <div className="flexbg-gray-50 rounded border border-gray-300 text-gray-900 text-base p-4 bg-white">
              <InvoicePreview />
            </div>
          </div>
        </main>
        <footer id="page-footer" className="flex flex-none items-center bg-white">
          <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm container xl:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="pt-4 pb-1 md:pb-4">
              <a href="https://tailkit.com" target="_blank" className="font-medium text-indigo-600 hover:text-indigo-400">
                Invoice
              </a>
              © 2021
            </div>
          </div>
        </footer>
      </div>
    </InvoiceProvider>
  );
}

export default App;
