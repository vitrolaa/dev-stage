import { StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	background: {
		flex: 1,
		width: '100%',
	},
	logo: {
		width: 87,
		height: 24,
	},
	title: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 28,
	},
	titleText: {
		fontSize: 24,
		color: colors.gray[100],
		fontWeight: '600',
		paddingBottom: 8,
	},
	subtitleText: {
		fontSize: 14,
		fontWeight: 'regular',
		color: colors.gray[300],
	},
	subtitle: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 20,
	},
	subtitleTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.gray[200],
		paddingBottom: 16,
	},
	linkBox: {
		borderWidth: 1,
		borderColor: colors.gray[800],
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 10,
	},
	link: {
		alignItems: 'center',
		fontSize: 16,
		color: colors.gray[100],
		fontWeight: 'regular',
	},
})
