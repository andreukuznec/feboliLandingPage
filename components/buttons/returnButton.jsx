import { useRouter } from 'next/router';

export function ReturnButton() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <button
      onClick={handleBack}
      className=" absolute mb-4 px-4 py-2 text-indigo-600 rounded hover:text-indigo-700 hover:-translate-y-0.5"
    >
      &larr;Вернуться
    </button>
  );
}
