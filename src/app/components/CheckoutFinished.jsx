"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

function CheckoutFinished({ isOpen, setIsOpen, returnHome }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={returnHome}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="font-bold text-lg mb-3">
                  Order confirm
                </Dialog.Title>
                <Dialog.Description className="text-sm">
                  Order confirmed successfully
                </Dialog.Description>
                <div className="w-full mt-10 text-center">
                  <button
                    className="px-4 py-1 text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200 w-full"
                    onClick={() => {
                      setIsOpen(false);
                      returnHome();
                    }}
                  >
                    Return home
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CheckoutFinished;
