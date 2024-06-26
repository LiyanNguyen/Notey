import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, memo, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Note } from "../types/Note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColorOptions, RatingOptions, Spinner } from ".";
import { PATCH_Note } from "../api";

import formatDate from "../utils/formatDate";
import { useTranslation } from "react-i18next";

type Props = {
  data: Note;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const NoteModal = memo((props: Props) => {
  const { data, isOpen, setIsOpen } = props;
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>(data.title);
  const [description, setDescription] = useState<string>(data.description);
  const [color, setColor] = useState<string>(data.color);
  const [rating, setRating] = useState<number>(data.rating);
  const { t } = useTranslation();

  // FUNCTIONS
  const closeModal = () => {
    setIsOpen(false);
    setTitle(data.title);
    setDescription(data.description);
    setColor(data.color);
    setRating(data.rating);
  };
  const refetchNotes = () =>
    queryClient.invalidateQueries({ queryKey: ["Notes"] });

  const isUpdateDisabled = () => {
    return (
      title === data.title &&
      description === data.description &&
      color === data.color &&
      rating === data.rating
    );
  };

  // HTTP PATCH
  const { mutate: PATCHMutate, isLoading: PATCHLoading } = useMutation({
    mutationFn: async () => {
      return PATCH_Note(data._id, title, description, color, rating);
    },
    onSuccess: () => {
      refetchNotes();
      setIsOpen(false);
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
              <Dialog.Panel
                className={`w-full max-w-md transform overflow-hidden rounded-md bg-white dark:bg-slate-800 px-6 py-4 text-left align-middle flex flex-col gap-3 border-t-${color}-400 border-t-8 transition-all`}
              >
                <button
                  onClick={closeModal}
                  className="absolute right-3 top-3 p-1.5 rounded-full bg-slate-50 hover:bg-slate-200 transition-all dark:bg-slate-600 dark:hover:bg-slate-700"
                >
                  <span className="hidden">Close</span>
                  <XMarkIcon className="h-5 w-5 text-gray-500 dark:text-white" />
                </button>
                <input
                  data-testid="title-input"
                  maxLength={25}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  type="text"
                  className="w-[300px] self-center text-center text-lg rounded-sm px-2 py-1 focus-within:outline-violet-500 cursor-pointer bg-inherit border border-transparent hover:border-violet-500 transition-colors duration-75 dark:text-slate-200"
                />
                <div>
                  <textarea
                    data-testid="description-input"
                    maxLength={150}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    rows={4}
                    className="w-full rounded-sm px-2 py-1 border border-transparent transition-colors duration-75 focus-within:outline-violet-500 resize-none bg-inherit cursor-pointer hover:border-violet-500 dark:text-slate-300"
                  />
                </div>
                <ColorOptions color={color} setColor={setColor} />
                <RatingOptions rating={rating} setRating={setRating} />
                <div className="flex justify-between">
                  <p className="text-xs text-slate-500">
                    {formatDate(new Date(data.createdAt))}
                  </p>
                  <p className="text-xs text-slate-500">
                    {data.updatedAt && formatDate(new Date(data.updatedAt))}
                  </p>
                </div>
                <div className="h-0.5 bg-gray-200" />
                <button
                  disabled={isUpdateDisabled()}
                  data-testid="update-button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 self-center w-28 disabled:bg-slate-200 disabled:text-gray-400"
                  onClick={() => PATCHMutate()}
                >
                  {PATCHLoading ? (
                    <Spinner className="h-6 w-6 border-[3px]" />
                  ) : (
                    t("update")
                  )}
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default NoteModal;
