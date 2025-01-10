import clsx from 'clsx'
import { FC, InputHTMLAttributes, PropsWithRef, useId } from 'react'
import styles from './ui-text-field.module.scss'

interface UiTextField {
	label?: string
	className?: string
	error?: string
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export const UiTextField: FC<UiTextField> = ({
	label,
	className,
	inputProps,
	error
}) => {
	const id = useId()
	return (
		<div className={clsx(className, styles.textField)}>
			{label && (
				<label
					htmlFor={id}
					className={styles.label}
				>
					{label}
				</label>
			)}
			<input
				{...inputProps}
				id={id}
				className={clsx(inputProps?.className, styles.inputs)}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
