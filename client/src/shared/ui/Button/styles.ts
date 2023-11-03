import { ButtonColor, type ButtonSize, type ButtonVariant } from './types'

// Variant styles
/** Styles for contained variant */
const getContainedClasses = (color: ButtonColor): string => {
	if (color === 'error')
		return 'text-text-base bg-error-main hover:bg-error-hover active:bg-error-active disabled:bg-disabled-main'

	// Default color: primary
	return 'text-text-base bg-primary-main hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled-main'
}

/** Styles for outlined variant */
const getOutlinedClasses = (color: ButtonColor): string => {
	if (color === 'error')
		return 'border-2 border-error-main hover:border-err0r-hover active:border-error-active text-text-error hover:text-error-hover active:text-error-active disabled:border-disabled-main disabled:text-disabled-main'

	// Default color: primary
	return 'border-2 border-primary-main hover:border-primary-active active:border-primary-active text-primary-main hover:text-primary-hover active:text-primary-active disabled:border-disabled-main disabled:text-disabled-main'
}

/** Styles for text variant */
const getTextClasses = (color: ButtonColor): string => {
	if (color === 'error')
		return 'text-error-main hover:text-error-hover active:text-error-active disabled:text-disabled-main'

	// Default color: primary
	return 'text-primary-main hover:text-primary-hover active:text-primary-active disabled:text-disabled-main'
}

/** Styles for link variant */
const getLinkClasses = (): string => {
	return 'p-0 font-normal text-sm hover:underline'
}

// Main style getters
/** Base styles for the button */
export const getBaseClasses = (): string => 'rounded transition font-semibold'

/** Size styles controller */
export const getSizeClasses = (size: ButtonSize): string => {
	if (size === 'sm') return 'py-1 px-3 text-sm'

	if (size === 'lg') return 'py-3 px-7 text-lg'

	// Default: md
	return 'py-2 px-5'
}

/** Variant styles controller */
export const getVariantClasses = (
	variant: ButtonVariant,
	color: ButtonColor
): string => {
	if (variant === 'outlined') return getOutlinedClasses(color)

	if (variant === 'text') return getTextClasses(color)

	if (variant === 'link') return getLinkClasses()

	return getContainedClasses(color) // Default variant: primary
}
