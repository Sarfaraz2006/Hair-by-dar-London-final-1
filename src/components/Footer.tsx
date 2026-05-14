export default function Footer() {
  return (
    <footer className="py-12 bg-base text-contrast font-sans font-medium px-8 md:px-12 text-[10px] flex flex-col flex-col-reverse md:flex-row justify-between items-center border-t border-contrast/10">
      <div className="mt-8 md:mt-0 uppercase tracking-widest text-contrast/70">
        © DAR London. All Rights Reserved.
      </div>
      <div className="flex gap-10 tracking-[0.2em] uppercase text-contrast/90">
        <a href="https://www.instagram.com/hairbydarlondon" target="_blank" rel="noopener noreferrer" className="hover:text-muted transition-colors duration-300">Instagram</a>
        <a href="#" className="hover:text-muted transition-colors duration-300">Masterclass</a>
        <a href="#" className="hover:text-muted transition-colors duration-300">Contact</a>
      </div>
    </footer>
  );
}
