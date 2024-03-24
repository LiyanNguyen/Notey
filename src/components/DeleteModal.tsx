import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, Fragment, memo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Spinner } from ".";
import { useRecoilState } from "recoil";
import { ratingState, colorState } from "../global";
import { DELETE_Note } from "../api";

type Props = {
  id: string;
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DeleteModal = memo((props: Props) => {
  const { id, title, isOpen, setIsOpen } = props;
  const queryClient = useQueryClient();

  const [ascending] = useRecoilState(ratingState);
  const [color] = useRecoilState(colorState);

  // FUNCTIONS
  const closeModal = () => setIsOpen(false);
  const refetchNotes = () =>
    queryClient.invalidateQueries({ queryKey: ["Notes", ascending, color] });

  // HTTP DELETE
  const { mutate: mutateDeleteNote, isLoading } = useMutation({
    mutationFn: async () => {
      return DELETE_Note(id);
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
                  Delete Confirmation
                </Dialog.Title>
                <p className="text-slate-500">
                  Are you sure you want to delete{" "}
                  <span className="text-black font-medium">{title}</span>
                  {""}? this action cannot be undone.
                </p>
                <div className="flex self-center gap-4">
                  <button
                    onClick={() => mutateDeleteNote()}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 self-center w-28"
                  >
                    {isLoading ? (
                      <Spinner className="h-6 w-6 border-[3px]" />
                    ) : (
                      "Delete"
                    )}
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 self-center w-28"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default DeleteModal;
