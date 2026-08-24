import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

const buttonVariants = cva(
  `
    relative overflow-hidden
    w-full py-4 px-6 rounded-xl
    font-inter font-semibold text-sm tracking-wider uppercase
    transition-all duration-300 ease-out
    disabled:opacity-70 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-dark-400
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-gold-gradient text-dark-400
          hover:bg-gold-gradient-hover hover:shadow-[0_4px_24px_rgba(212,175,55,0.35)]
          hover:-translate-y-0.5
          active:translate-y-0
        `,
        outline: `
          border border-gold-300/30 text-gold-300
          hover:bg-gold-300/10 hover:border-gold-300/50
        `,
      },
      size: {
        default: 'py-4',
        sm: 'py-2.5 text-xs',
        lg: 'py-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
}

export function SubmitButton({
  className,
  variant,
  size,
  isLoading,
  loadingText,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isLoading}
      {...props}
    >
      {/* Efeito de brilho no hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />

      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin-slow h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          {loadingText || 'Processando...'}
        </span>
      ) : (
        children
      )}
    </button>
  );
}