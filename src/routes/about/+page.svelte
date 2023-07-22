<script lang="ts">
	import type { PageData } from './$types';
	import { techs, softSkills, hardSkills } from '$lib/contents/about';
	import BadgetList from './BadgetList.svelte';
	import TechsCarousel from './TechsCarousel.svelte';
	import Timeline from './Timeline.svelte';

	export let data: PageData;
	let skills = 'soft';
	let timeline = 'complete';

	$: badgets = skills === 'soft' ? softSkills : hardSkills;
	$: timelineItems =
		timeline === 'complete'
			? data.timeline
			: data.timeline.filter((item) => item.type === timeline);
</script>

<div
	class="mx-6 sm:mx-12 lg:mx-24 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<section
		class="flex flex-col-reverse md:flex-row gap-6 items-center md:items-start"
	>
		<div class="w-full md:w-2/3">
			<h1 class="text-4xl mb-2 font-bold">Sobre mí</h1>
			<div>
				<p>
					Mi trayectoria profesional ha evolucionado muchísimo a lo largo de mi
					carrera. Tras diplomarme en comunicación gráfica publicitaria, mi
					pasión por la tecnología y el mundo digital me llevó a especializarme
					en desarrollo de software, particularmente en tecnologías web y
					multiplataforma.
				</p>

				<p>
					Cuento con más de <span
						class="underline decoration-primary decoration-wavy"
						>15 años de experiencia</span
					>
					laboral en puestos relacionados con el
					<span class="underline decoration-primary decoration-wavy"
						>análisis, diseño y desarrollo de software</span
					>. He trabajado en empresas pequeñas, medianas y grandes (a algunas he
					tenido la suerte de verlas crecer). He participado en diversos
					proyectos, en diferentes sectores y siempre formando parte de equipos
					multidisciplinares.
				</p>

				<p>
					<span class="underline decoration-primary decoration-wavy"
						>Me apasionan los retos, la formación constante y la investigación
						(a lo que dedico gran parte de mi tiempo)</span
					>. Actualmente las áreas de mayor interés para mí son: el desarrollo
					software, la ciencia de datos y machine learning, RPA y automatización
					de procesos, blockchain y gestión de activos digitales.
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
					Principalmente la curiosidad y el hecho de disfrutar de mi trabajo
					como si de un hobby se tratase. La curiosidad me ha ayudado a
					evolucionar y crecer en mi carrera profesional. Además, me motiva a
					explorar nuevas tecnologías y herramientas que me mantienen
					actualizado y me ayudan a encontrar soluciones creativas e innovadoras
					a los desafíos a los que me enfrento en mi día a día.
				</p>
			</div>
		</div>
		<div class="w-full md:w-1/2">
			<ul class="flex flex-col md:flex-row gap-0 md:gap-4 mb-2">
				<li>
					<label class="label cursor-pointer justify-start">
						<input
							type="radio"
							name="skills"
							class="radio"
							value="soft"
							bind:group={skills}
						/>
						<span class="ml-2">Soft skills</span>
					</label>
				</li>
				<li>
					<label class="label cursor-pointer justify-start">
						<input
							type="radio"
							name="skills"
							class="radio"
							value="hard"
							bind:group={skills}
						/>
						<span class="ml-2">Hard skills</span>
					</label>
				</li>
			</ul>
			<BadgetList {badgets} />
		</div>
	</section>
	<section class="flex flex-col mt-16 items-start">
		<div>
			<h1 class="text-3xl mb-2 font-bold">
				¿Dónde me manejo como pez en el agua?
			</h1>
			<div>
				Estas son algunas de las tecnologías con las que trabajo a diario, tanto
				profesional, como personalmente:
			</div>
		</div>
		<TechsCarousel {techs} />
	</section>
	<section class="flex flex-col mt-16 items-start">
		<h1 class="text-3xl mb-2 font-bold">¿Cuál ha sido mi trayectoria?</h1>
		<ul class="flex flex-col md:flex-row gap-0 md:gap-4 my-4">
			<li>
				<label class="label cursor-pointer justify-start">
					<input
						type="radio"
						name="timeline"
						class="radio"
						value="complete"
						bind:group={timeline}
					/>
					<span class="ml-2">Completa</span>
				</label>
			</li>
			<li>
				<label class="label cursor-pointer justify-start">
					<input
						type="radio"
						name="timeline"
						class="radio"
						value="academic"
						bind:group={timeline}
					/>
					<span class="ml-2">Académica</span>
				</label>
			</li>
			<li>
				<label class="label cursor-pointer justify-start">
					<input
						type="radio"
						name="timeline"
						class="radio"
						value="professional"
						bind:group={timeline}
					/>
					<span class="ml-2">Profesional</span>
				</label>
			</li>
		</ul>
		<Timeline {timelineItems} />
	</section>
</div>
