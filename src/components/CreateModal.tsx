import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { colorOptions, ratingOptions } from "../data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Spinner } from ".";
import { POST_Note } from "../api";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CreateModal = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const colorDropdownRef = useRef<HTMLSelectElement>(null);
  const ratingDropdownRef = useRef<HTMLSelectElement>(null);
  const queryClient = useQueryClient();

  // FUNCTIONS
  const closeModal = () => {
    setIsOpen(false)
    setTitle("")
    setDescription("")
  };
  const refetchNotes = () =>
    queryClient.invalidateQueries({ queryKey: ["Notes"] });

  // HTTP POST
  const { mutate: POSTMutate, isLoading: POSTLoading } = useMutation({
    mutationFn: async () => {
      if (colorDropdownRef.current && ratingDropdownRef.current)
        return POST_Note(
          title,
          description,
          colorDropdownRef.current.value,
          parseInt(ratingDropdownRef.current.value)
        );
    },
    onSuccess: () => {
      refetchNotes();
      closeModal();
    },
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white px-6 py-4 text-left align-middle transition-all flex flex-col gap-3">
                <button
                  onClick={closeModal}
                  className="absolute right-3 top-3 p-1.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-all"
                >
                  <span className="hidden">Close</span>
                  <XMarkIcon className="h-5 w-5 text-gray-500" />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center"
                >
                  Create New Note
                </Dialog.Title>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label htmlFor="title" className="text-slate-500 text-sm">
                      Title
                    </label>
                    {title.length >= 12 && (
                      <span className="text-slate-400 text-xs">
                        {title.length}/25
                      </span>
                    )}
                  </div>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={25}
                    id="title"
                    type="text"
                    className="w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500"
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label htmlFor="title" className="text-slate-500 text-sm">
                      Description
                    </label>
                    {description.length >= 75 && (
                      <span className="text-slate-400 text-xs">
                        {description.length}/150
                      </span>
                    )}
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={150}
                    id="description"
                    rows={4}
                    className="w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-2 focus-within:outline-violet-500 resize-none"
                  />
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col w-full">
                    <label htmlFor="color" className="text-slate-500 text-sm">
                      Color
                    </label>
                    <select
                      ref={colorDropdownRef}
                      defaultValue={"blue"}
                      name="color"
                      id="color"
                      className="w-full rounded border p-1.5 bg-transparent border-slate-400 rounded-sm-within:outline-2 focus-within:outline-violet-500 capitalize"
                    >
                      {colorOptions.slice(1).map((item) => (
                        <option className="capitalize" key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="rating" className="text-slate-500 text-sm">
                      Rating
                    </label>
                    <select
                      ref={ratingDropdownRef}
                      defaultValue={"1"}
                      name="rating"
                      id="rating"
                      className="w-full rounded border p-1.5 bg-transparent border-slate-400 rounded-sm-within:outline-2 focus-within:outline-violet-500 capitalize"
                    >
                      {ratingOptions.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="h-0.5 bg-gray-200 mt-4" />
                <button
                  disabled={title.length < 5 || description.length < 5}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
                  onClick={() => POSTMutate()}
                >
                  {POSTLoading ? <Spinner className="h-6 w-6 border-[3px]" /> : "Create"}
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateModal;
