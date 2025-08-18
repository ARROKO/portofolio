interface NavigationDotsProps {
    total: number;
    current: number;
    onChange: (index: number) => void;
    type: 'personal' | 'professional';
  }
  
  export const NavigationDots = ({ total, current, onChange, type }: NavigationDotsProps) => (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className={`w-2 h-2 rounded-full transition-all duration-300
            ${idx === current 
              ? `w-8 ${type === 'personal' ? 'bg-pink-500' : 'bg-blue-500'}` 
              : 'bg-white/30 hover:bg-white/50'}`}
        />
      ))}
    </div>
  );