import React from "react";
import Modal from "react-modal";

// import "bootstrap/dist/css/bootstrap.min.css";
function AdressPaymentModal({ modalIsOpen, closeModal }) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <div>
      <div className="flex flex-col">
        <Modal
          className="md:w-1/2 lg:w-2/5 lg:h-2/3 xl:h-3/6 md:mx-auto border bg-gray-50 shadow-sm rounded-sm flex px-10 py-4  md:mt-80 lg:mt-20 flex-col "
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <section className="w-full flex flex-col my-2">
            <div className="text-lg font-semibold text-greeen mb-8">
              Feedback
            </div>
            <input
              type="Email"
              placeholder="email"
              className="w-full lg:w-80 xl:w-96 border-2 rounded-sm border-gray-200 focus:outline-none focus:border-greeen bg-gray-50 mt-2 p-1"
            />
          </section>
        </Modal>
      </div>
    </div>
  );
}

export default AdressPaymentModal;
