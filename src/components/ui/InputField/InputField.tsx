import { forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';
import type { LucideIcon } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: FieldError;
  delay?: number;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon: Icon, error, delay = 0, className, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-1.5 animate-fade-in-up`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}>
        <div className="relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-300 transition-colors duration-300">
            <Icon size={18} strokeWidth={1.5} />
          </div>

          <input
            ref={ref}
            className={`
              w-full bg-dark-400 border rounded-xl py-3.5 pl-12 pr-4
              text-white font-inter text-sm
              placeholder-transparent
              transition-all duration-300 ease-in-out
              focus:outline-none
              ${error
                ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                : 'border-gray-700 focus:border-gold-300 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)]'
              }
              ${className || ''}
            `}
            placeholder={label}
            {...props}
          />

          <label
            className={`
              absolute left-12 top-1/2 -translate-y-1/2
              text-gray-500 font-inter text-sm
              pointer-events-none
              transition-all duration-300 ease-in-out
              origin-left
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[-50%]
              peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-gold-300
              ${props.value ? 'scale-75 -translate-y-8 text-gold-300' : ''}
            `}
          >
            {label}
          </label>
        </div>

        {error && (
          <span className="text-red-500 text-xs font-inter flex items-center gap-1 animate-fade-in-up">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;