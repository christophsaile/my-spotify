'use client';
export default function Button({
  children,
  active,
  onClick,
}: {
  children: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        active
          ? 'bg-green-600 hover:bg-green-500 focus:outline-white'
          : 'bg-neutral-800 hover:bg-neutral-700 focus:outline-green-600'
      } text-white text-sm py-2 px-4 rounded-lg focus:outline-2 focus:outline-dashed focus:outline-green-600`}
    >
      {children}
    </button>
  );
}
