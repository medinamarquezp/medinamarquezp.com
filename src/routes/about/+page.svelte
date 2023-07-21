<script lang="ts">
	import type { TimelineItem } from '$lib/types';
	import BadgetList from './BadgetList.svelte';
	import TechsCarousel from './TechsCarousel.svelte';
	import Timeline from './Timeline.svelte';
	
	const softSkills = [
		'Adaptavilidad al cambio',
		'Aprendizaje continuo',
		'Atención al detalle',
		'Capacidad de abstracción',
		'Capacidad de autogestión',
		'Pensamiento analítico',
		'Pensamiento creativo',
		'Proactividad',
		'Trabajo en equipo'
	];
	const techs = [
		{ icon: 'devicon-javascript-plain', label: 'Javascript' },
		{ icon: 'devicon-typescript-plain', label: 'Typescript' },
		{ icon: 'devicon-nodejs-plain', label: 'NodeJS' },
		{ icon: 'devicon-express-original', label: 'Express' },
		{ icon: 'devicon-nestjs-plain', label: 'NestJS' },
		{ icon: 'devicon-jest-plain', label: 'Jest' },
		{ icon: 'devicon-svelte-plain', label: 'Svelte' },
		{ icon: 'devicon-tailwindcss-plain', label: 'Tailwind' },
		{ icon: 'devicon-dart-plain', label: 'Dart' },
		{ icon: 'devicon-flutter-plain', label: 'Flutter' },
		{ icon: 'devicon-solidity-plain', label: 'Solidity' },
		{ icon: 'devicon-postgresql-plain', label: 'PostgreSQL' },
		{ icon: 'devicon-mongodb-plain', label: 'MongoDB' },
		{ icon: 'devicon-redis-plain', label: 'Redis' },
		{ icon: 'devicon-git-plain', label: 'Git' },
		{ icon: 'devicon-googlecloud-plain', label: 'Google Cloud Platform' },
		{ icon: 'devicon-digitalocean-plain', label: 'Digital Ocean' },
		{ icon: 'devicon-docker-plain', label: 'Docker' },
		{ icon: 'devicon-ubuntu-plain', label: 'Ubuntu' }
	];
	const timelineItems: TimelineItem[] = [
		{
			type: 'academic',
			company: 'IEBS',
			brand: '/timeline_brands/iebs.png',
			title: 'Postgrado en Ingeniería y arquitectura Blockchain',
			start: new Date('2022-10-01'),
			end: null,
			description:
				'En este posgrado se estudia en detalle la programación de contratos inteligentes y el desarrollo de aplicaciones descentralizadas mediante el uso de Solidity y Truffle Suite. Se despliega en redes ERC-20 (como Ethereum, Polygon o BNB Chain). Se configura, desarrolla y despliegua redes permisionadas mediante Hyperledger Fabric.',
			techs: [
				{ icon: 'devicon-solidity-plain', label: 'Solidity' },
				{ icon: 'devicon-polygon-plain', label: 'Polygon' },
				{ icon: 'devicon-nixos-plain', label: 'Hyperledger' },
				{ icon: 'devicon-docker-plain', label: 'Docker' }
			]
		},
		{
			type: 'academic',
			company: 'Ilerna Online',
			brand: '/timeline_brands/ilerna.png',
			title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
			start: new Date('2018-09-01'),
			end: new Date('2019-06-01'),
			description:
				'Este ciclo complementa a DAW y profundiza en el desarrollo de aplicaciones móviles mediante el uso de Java para Android y CSharp para Unity. Además, avanza en la programación de servicios y procesos con Java e introduce los sistemas de gestión empresarial mediante el desarrollo y configuración de diferentes ERPs como Odoo.',
			techs: [
				{ icon: 'devicon-bash-plain', label: 'Bash' },
				{ icon: 'devicon-java-plain', label: 'Java' },
				{ icon: 'devicon-android-plain', label: 'Android' },
				{ icon: 'devicon-androidstudio-plain', label: 'Android Studio' },
				{ icon: 'devicon-csharp-plain', label: 'CSharp' },
				{ icon: 'devicon-unity-original', label: 'Unity' },
				{ icon: 'devicon-python-plain', label: 'Python' },
			]
		},
		{
			type: 'academic',
			company: 'Ilerna Online',
			brand: '/timeline_brands/ilerna.png',
			title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
			start: new Date('2016-09-01'),
			end: new Date('2018-06-01'),
			description:
				'En este ciclo se estudia las bases de la programación y el ciclo completo para el desarrollo de aplicaciones y servicios web: diseño, desarrollo (front y back) y puesta en producción. Se estudia, configura y trabaja con diferentes sistemas operativos virtualizados. Se profundiza en la administración y uso avanzado de bases de datos, desde consultas, hasta programación de procedimientos y scripts.',
			techs: [
				{ icon: 'devicon-csharp-plain', label: 'CSharp' },
				{ icon: 'devicon-java-plain', label: 'Java' },
				{ icon: 'devicon-selenium-original', label: 'Selenium' },
				{ icon: 'devicon-html5-plain', label: 'HTML' },
				{ icon: 'devicon-css3-plain', label: 'CSS' },
				{ icon: 'devicon-javascript-plain', label: 'Javascript' },
				{ icon: 'devicon-php-plain', label: 'PHP' },
				{ icon: 'devicon-mysql-plain', label: 'MySQL' },
				{ icon: 'devicon-microsoftsqlserver-plain', label: 'SQL Server' },
				{ icon: 'devicon-oracle-original', label: 'Oracle' },
				{ icon: 'devicon-git-plain', label: 'GIT' },
				{ icon: 'devicon-nginx-original', label: 'Nginx' },
				{ icon: 'devicon-linux-plain', label: 'Linux' }
			]
		}
	];
	let skills = 'soft'
	let timeline = 'complete'
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>
</svelte:head>

<div class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in">
	<section
		class="flex flex-col-reverse md:flex-row gap-6 items-center md:items-start"
	>
		<div class="w-full md:w-2/3">
			<h1 class="text-4xl mb-2 font-bold">¿Quién soy?</h1>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
					gravida sapien non hendrerit. Donec a lorem odio. Nulla congue felis
					ac ligula dictum aliquam. Ut auctor, felis id dictum vehicula, felis
					metus luctus dui, sed egestas diam purus sed nulla. Nam at rhoncus
					massa. Nulla facilisi. Phasellus sagittis sapien vel risus malesuada,
					a vestibulum ipsum auctor.
				</p>
				<p>
					Nulla porttitor massa nisl, id ornare massa cursus eu. In finibus quam
					quis tincidunt semper. Pellentesque a magna ullamcorper, commodo dolor
					nec, feugiat ante. Suspendisse faucibus, mi vitae dictum interdum, sem
					libero sodales neque, id suscipit augue mauris sit amet tortor. Donec
					id mauris dignissim, finibus ipsum vel, convallis tortor. Duis enim
					ipsum, tristique sed consequat sed, varius in dolor. Praesent maximus
					tortor eros, in dictum ex lacinia id. Pellentesque imperdiet quam nec
					rhoncus vestibulum. Donec sit amet justo eu orci gravida eleifend.
					Morbi eros arcu, porta ut varius ac, auctor vel nulla. Duis placerat
					tincidunt ornare.
				</p>
			</div>
		</div>
		<img
			class="mask mask-squircle w-80"
			src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
			alt=""
		/>
	</section>
	<section class="flex flex-col md:flex-row gap-6 mt-16 items-start">
		<div class="w-full md:w-1/2">
			<h1 class="text-3xl mb-2 font-bold">¿Qué me hace diferente?</h1>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
					gravida sapien non hendrerit. Donec a lorem odio. Nulla congue felis
					ac ligula dictum aliquam. Ut auctor, felis id dictum vehicula, felis
					metus luctus dui, sed egestas diam purus sed nulla. Nam at rhoncus
					massa. Nulla facilisi. Phasellus sagittis sapien vel risus malesuada,
					a vestibulum ipsum auctor.
				</p>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<ul class="flex flex-col md:flex-row gap-0 md:gap-4 my-4">
				<li>
					<label class="label cursor-pointer justify-start">
						<input type="radio" name="skills" class="radio" value="soft" bind:group={skills} />
						<span class="ml-2">Soft skills</span>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer justify-start">
						<input type="radio" name="skills" class="radio" value="hard" bind:group={skills}  />
						<span class="ml-2">Hard skills</span>
					</label>
				</li>
			</ul>
			<BadgetList badgets={softSkills} />
		</div>
	</section>
	<section class="flex flex-col mt-16 items-start">
		<div>
			<h1 class="text-3xl mb-2 font-bold">
				¿Dónde me manejo como pez en el agua?
			</h1>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
				gravida sapien non hendrerit. Donec a lorem odio. Nulla congue felis ac
				ligula dictum aliquam. Ut auctor, felis id dictum vehicula, felis metus
				luctus dui, sed egestas diam purus sed nulla.
			</div>
		</div>
		<TechsCarousel {techs} />
	</section>
	<section class="flex flex-col mt-16 items-start">
		<div>
			<h1 class="text-3xl mb-2 font-bold">¿Cuál ha sido mi trayectoria?</h1>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
				gravida sapien non hendrerit. Donec a lorem odio. Nulla congue felis ac
				ligula dictum aliquam. Ut auctor, felis id dictum vehicula, felis metus
				luctus dui, sed egestas diam purus sed nulla.
			</div>
		</div>
		<ul class="flex flex-col md:flex-row gap-0 md:gap-4 my-4">
			<li>
				<label class="label cursor-pointer justify-start">
					<input type="radio" name="timeline" class="radio" value="complete" bind:group={timeline} />
					<span class="ml-2">Completa</span>
				</label>
			</li>
			<li>
				<label class="label cursor-pointer justify-start">
					<input type="radio" name="timeline" class="radio" value="academic" bind:group={timeline}  />
					<span class="ml-2">Académica</span>
				</label>
			</li>
			<li>
				<label class="label cursor-pointer justify-start">
					<input type="radio" name="timeline" class="radio" value="professional" bind:group={timeline} />
					<span class="ml-2">Profesional</span>
				</label>
			</li>
		</ul>
		<Timeline {timelineItems} />
	</section>
</div>
