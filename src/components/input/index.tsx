import type { LucideIcon } from 'lucide-react-native'
import { TextInput, type TextInputProps, View } from 'react-native'
import { colors } from '@/styles/colors'
import { styles } from './styles'

type InputProps = TextInputProps & {
	iconName: LucideIcon
	placeholder: string
}

export function Input({ iconName: Icon, placeholder, ...rest }: InputProps) {
	return (
		<View>
			<Icon size={20} color={colors.gray[400]} />
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor={colors.gray[400]}
				{...rest}
			/>
		</View>
	)
}
