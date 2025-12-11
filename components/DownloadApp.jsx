// components/DownloadApp.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function DownloadApp() {
  return (
    <section className="mt-24 mb-24 px-6 sm:px-12 md:px-20 lg:px-32 scroll-mt-20" id="download" >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Download the Specifik App
        </h3>
        <p className="text-gray-600 mb-8">
          Set your product preferences and get notified when sellers post matching items in Telegram groups. 
          Never miss a deal that's perfect for you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
<<<<<<< HEAD
          {/* App Store Button - COMMENTED OUT */}
=======
          {/* App Store Button */}
>>>>>>> e8f233540c312c633c5e4f6096521c70fe47df27
          {/* <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faApple} className="mr-3 text-xl" />
            Download on the App Store
          </a> */}

<<<<<<< HEAD
          {/* Google Play Button - COMMENTED OUT */}
=======
          <button className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto">
            <FontAwesomeIcon icon={faApple} className="mr-3 text-xl" />
            Download on the App Store
          </button>

          {/* Google Play Button */}
>>>>>>> e8f233540c312c633c5e4f6096521c70fe47df27
          {/* <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-xl" />
            Get it on Google Play
<<<<<<< HEAD
          </a> */}

          {/* APK Download Button */}
          <a href="https://docs.google.com/uc?export=download&id=1bNC47X8IeQX4OeiAw6UZe3cbAS-7qoZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-xl" />
            Download APK for Android
          </a>
        </div>

        {/* Text for Status Update */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Android users: Download the APK above.
          </p>
          <p className="mt-2 text-yellow-700 font-semibold">
            iOS & Android: We are currently in the final stages of the review process with the Apple App Store and Google Play Store. Thank you for your patience!
          </p>
=======
          </a>          */}

          <button className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md w-full sm:w-auto">
            <FontAwesomeIcon icon={faGooglePlay} className="mr-3 text-xl" />
            Get it on Google Play
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Available for iOS and Android devices</p>
>>>>>>> e8f233540c312c633c5e4f6096521c70fe47df27
        </div>
      </div>
    </section>
  );
}