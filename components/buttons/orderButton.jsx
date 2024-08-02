export function OrderButton({ children }) {
  return (
    <>
      <a
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:-translate-y-0.5"
      >
        {children ? children : "Записаться"}
        <span aria-hidden="true">&rarr;</span>{" "}
      </a>
    </>
  );
}