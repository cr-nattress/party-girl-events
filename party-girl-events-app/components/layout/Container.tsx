import { cn } from '@/lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const sizeClasses = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  full: 'max-w-[1440px]',
}

/**
 * Container component - Responsive max-width wrapper
 * Used for consistent page layout and content width
 */
export function Container({
  children,
  className,
  size = 'full',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}
