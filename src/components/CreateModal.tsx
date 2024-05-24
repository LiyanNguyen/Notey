import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColorOptions, RatingOptions, Spinner } from ".";
import { POST_Note } from "../api";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CreateModal = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [color, setColor] = useState<string>("blue");
  const [rating, setRating] = useState<number>(1);
  const queryClient = useQueryClient();

  // FUNCTIONS
  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setDescription("");
  };
  const refetchNotes = () =>
    queryClient.invalidateQueries({ queryKey: ["Notes"] });

  // HTTP POST
  const { mutate: POSTMutate, isLoading: POSTLoading } = useMutation({
    mutationFn: async () => {
      return POST_Note(title, description, color, rating);
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white px-6 py-4 text-left align-middle transition-all flex flex-col gap-3 dark:bg-slate-800">
                <button
                  data-testid="close-button"
                  onClick={closeModal}
                  className="absolute right-3 top-3 p-1.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-all dark:bg-slate-600 dark:hover:bg-slate-700"
                >
                  <span className="hidden">Close</span>
                  <XMarkIcon className="h-5 w-5 text-gray-500 dark:text-white" />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center dark:text-slate-200"
                >
                  Create New Note
                </Dialog.Title>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="title"
                      className="text-slate-500 text-sm dark:text-slate-400"
                    >
                      Title
                    </label>
                    {title.length >= 12 && (
                      <span className="text-slate-400 text-xs">
                        {title.length}/25
                      </span>
                    )}
                  </div>
                  <input
                    data-testid="title-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={25}
                    id="title"
                    type="text"
                    className="bg-inherit w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-violet-500 dark:text-slate-200"
                  />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-between">
                    <label
                      htmlFor="title"
                      className="text-slate-500 text-sm dark:text-slate-400"
                    >
                      Description
                    </label>
                    {description.length >= 75 && (
                      <span className="text-slate-400 text-xs">
                        {description.length}/150
                      </span>
                    )}
                  </div>
                  <textarea
                    data-testid="description-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={150}
                    id="description"
                    rows={4}
                    className="bg-inherit w-full border border-slate-400 rounded-sm px-2 py-1 focus-within:outline-violet-500 resize-none dark:text-slate-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-slate-500 text-sm mb-1 dark:text-slate-400">
                      Color
                    </p>
                    <ColorOptions color={color} setColor={setColor} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm dark:text-slate-400">
                      Rating
                    </p>
                    <RatingOptions rating={rating} setRating={setRating} />
                  </div>
                </div>
                <div className="h-0.5 bg-gray-200 mt-4" />
                <button
                  data-testid="create-button"
                  disabled={title.length < 5 || description.length < 5}
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
                  onClick={() => POSTMutate()}
                >
                  {POSTLoading ? (
                    <Spinner className="h-6 w-6 border-[3px]" />
                  ) : (
                    "Create"
                  )}
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
