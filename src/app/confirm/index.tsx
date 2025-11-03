import { ImageBackground, Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { styles } from './styles'

export function Confirm() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('@/assets/Background.png')}
				style={styles.background}
			>
				<SvgUri uri={require('@/assets/Logo.svg')} style={styles.logo} />

				<View style={styles.title}>
					<Text style={styles.titleText}>Inscrição confirmada!</Text>
					<Text style={styles.subtitleText}>
						Para entrar no evento, acesse o link enviado para seu e-mail.
					</Text>
				</View>

				<View style={styles.subtitle}>
					<Text style={styles.subtitleTitle}>Indique e Ganhe</Text>
					<Text style={styles.subtitleText}>
						Convide mais pessoas para o evento e concorra a prêmios exclusivos!
						É só compartilhar o link abaixo e acompanhar as inscrições:
					</Text>
				</View>

				<View style={styles.linkBox}>
					<Text numberOfLines={1} style={styles.link}>
						devstage.com/cadumatapolicial-sum...
					</Text>
				</View>
			</ImageBackground>
		</View>
	)
}
