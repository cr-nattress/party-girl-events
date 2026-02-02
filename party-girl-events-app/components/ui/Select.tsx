import { cn } from '@/lib/cn'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
}

export function Select({
  label,
  error,
  helperText,
  options,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s/g, '-')

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-[var(--text)] mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'w-full px-4 py-3 rounded-lg border transition-colors appearance-none bg-white',
          'focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
          error
            ? 'border-red-500 bg-red-50'
            : 'border-[var(--text-muted)]/30',
          'disabled:bg-[var(--bg-muted)] disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-[var(--text-muted)]">{helperText}</p>
      )}
    </div>
  )
}
