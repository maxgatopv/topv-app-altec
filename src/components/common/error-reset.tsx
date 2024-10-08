export default function ErrorButton({
    reset,
  }: {
    reset: () => void;
  }) {
  return (
    <>
      <div className="m-3 flex h-full items-center justify-center rounded-lg bg-slate-50">
        <div className="my-auto">
          <button className="btn-primary" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </>
  );
}
