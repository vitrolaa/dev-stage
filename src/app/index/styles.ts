import { StyleSheet } from 'react-native'
import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		width: '100%',
	},

	header: {
		paddingTop: 76,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 40,
	},
	logo: {
		width: 87,
		height: 24,
	},
	headerContent: {
		paddingTop: 20,
	},
	title: {
		fontSize: 36,
		fontWeight: 'semibold',
		lineHeight: 120,
		color: colors.blue[300],
	},
	subtitle: {
		fontSize: 32,
		fontWeight: '600',
		color: colors.gray[100],
	},
	card: {
		flex: 1,
		backgroundColor: colors.gray[700],
		padding: 24,
		flexDirection: 'column',
		gap: 24,
		borderWidth: 1,
		borderColor: colors.gray[600],
		borderRadius: 16,
		marginHorizontal: 16,
	},
	aboutHeader: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	aboutTitle: {
		fontSize: 20,
		fontWeight: '600',
		color: colors.gray[200],
	},
	aboutStatus: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	aboutSubtitle: {
		fontSize: 12,
		fontWeight: '600',
		color: colors.gray[300],
		textTransform: 'uppercase',
	},
	description: {
		fontSize: 14,
		fontWeight: '400',
		color: colors.gray[300],
	},
})
