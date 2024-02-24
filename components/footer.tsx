export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className='fixed bottom-0 left-0 right-0 pt-3 pb-2 px-3 flex justify-between bg-neutral-900 rounded-t-xl'>
      {children}
    </footer>
  );
}
