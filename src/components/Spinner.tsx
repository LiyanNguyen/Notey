type Props = {
  className: string;
};

const Spinner = (props: Props) => {
  const { className } = props;

  return (
    <progress
      value={0}
      className={`inline-block animate-spin rounded-full border-violet-500 border-solid border-r-transparent border-l-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] ${className} bg-inherit`}
    />
  );
};

export default Spinner;
