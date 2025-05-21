export default function VideoModal() {
  const videoId = "KLuTLF3x9sA";

  const openModal = () => {
    const modal = document.getElementById("video-modal");
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    }

    // Dynamically insert iframe
    const iframeContainer = document.getElementById("video-iframe-container");
    if (iframeContainer) {
      iframeContainer.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowfullscreen
            class="w-full h-full rounded-xl"
          ></iframe>
        `;
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("video-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }

    // Remove iframe to fully stop playback
    const iframeContainer = document.getElementById("video-iframe-container");
    if (iframeContainer) {
      iframeContainer.innerHTML = "";
    }
  };

  return (
    <>
      {/* Thumbnail + Play Button */}
      <div
        onClick={openModal}
        className="relative w-full md:w-1/2 mx-auto cursor-pointer group"
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="Video thumbnail"
          className="rounded-xl w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="../../public/images/Play.png"
            alt="Play"
            className="w-16 h-16 transition-transform group-hover:scale-110"
          />
        </div>
      </div>

      {/* Modal */}
      <div
        id="video-modal"
        className="hidden fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-80 px-4"
        onClick={closeModal}
      >
        <div
          className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 z-10 bg-white text-black rounded-full p-1 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* YouTube iframe will be injected here */}
          <div id="video-iframe-container" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
