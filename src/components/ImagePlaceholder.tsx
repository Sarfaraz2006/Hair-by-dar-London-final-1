import { Camera } from 'lucide-react';

export default function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 w-full h-full bg-muted/10 border border-muted/20 flex flex-col items-center justify-center text-contrast/40">
      <Camera className="w-8 h-8 mb-3 opacity-50" strokeWidth={1} />
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-sans opacity-70">Image Placeholder</span>
    </div>
  );
}
