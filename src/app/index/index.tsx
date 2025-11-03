import { RadioIcon, Mail, User } from 'lucide-react-native'
import { ImageBackground, Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { colors } from '@/styles/colors'
import { styles } from './styles'
import { Input } from '@/components/input'

export default function Index() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('@/assets/Background.png')}
				style={styles.background}
			>
				<View style={styles.header}>
					<SvgUri uri={require('@/assets/Logo.svg')} style={styles.logo} />

					<View style={styles.headerContent}>
						<Text style={styles.title}>CodeCraft</Text>
						<Text style={styles.subtitle}>Summit 2025</Text>
					</View>
				</View>

				<View style={styles.card}>
					<View style={styles.aboutHeader}>
						<Text style={styles.aboutTitle}>Sobre o evento </Text>

						<View style={styles.aboutStatus}>
							<RadioIcon size={20} color={colors.purple[300]} />
							<Text style={styles.aboutSubtitle}>ao vivo</Text>
						</View>
					</View>
					<Text style={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi
						beatae adipisci voluptatum reprehenderit impedit deserunt ducimus
						nemo delectus fugit corrupti provident ipsam dolore labore
						aspernatur asperiores minima, molestias excepturi distinctio totam
						eveniet? Enim, fugiat! Corrupti autem quae, debitis accusamus magni
						nobis sequi numquam perferendis necessitatibus sunt animi deleniti
						non vel blanditiis et iusto, harum dicta dignissimos provident
						fugiat eius at voluptatem in soluta. Voluptates mollitia consequatur
						animi quam perferendis laborum, doloremque nihil nobis, cum commodi
						facilis esse magnam maxime magni facere perspiciatis qui? Error quis
						eum dicta quia maxime qui eos, enim quidem aut officia minus neque
						non ipsum.
					</Text>
					<Text style={styles.description}>27 de novembro</Text>
				</View>
				<View style={[styles.card, { marginTop: 16 }]}>
					<Text style={styles.aboutTitle}>Inscrição</Text>

					<Input iconName={User} placeholder="Nome completo" />
					<Input iconName={Mail} placeholder="E-mail" />
				</View>
			</ImageBackground>
		</View>
	)
}
