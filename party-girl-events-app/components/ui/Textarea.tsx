import { cn } from '@/lib/cn'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Textarea({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s/g, '-')

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-[var(--text)] mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={4}
        className={cn(
          'w-full px-4 py-3 rounded-lg border transition-colors resize-y',
          'focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
          error
            ? 'border-red-500 bg-red-50'
            : 'border-[var(--text-muted)]/30 bg-white',
          'disabled:bg-[var(--bg-muted)] disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-[var(--text-muted)]">{helperText}</p>
      )}
    </div>
  )
}
