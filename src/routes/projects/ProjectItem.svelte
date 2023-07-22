<script lang="ts">
    import type { Tech } from '$lib/types';
	import TechsList from '$lib/components/TechsList.svelte';
	import ProjectItemGallery from './ProjectItemGallery.svelte';
	let techs: Tech[] = [
		{ icon: 'devicon-svelte-plain', label: 'Svelte' },
		{ icon: 'devicon-nodejs-plain', label: 'NodeJS' }
	];
</script>

<div class="mb-8">
	<div
		class="flex flex-col lg:flex-row gap-6 bg-neutral sm:bg-transparent p-8 sm:p-0 rounded-xl"
	>
		<div class="flex flex-col w-full lg:w-1/2">
			<h1 class="text-4xl font-bold">
				Lorem ipsum dolor sit amet, consectetur adipiscing.
			</h1>
			<div class="flex flex-row gap-2 sm:gap-2 mt-5 mb-4 items-center">
				<div class="badge badge-lg bg-secondary">fullstack</div>
				<div class="badge badge-lg bg-secondary">buildinginpublic</div>
			</div>
			<div class="mb-4">
				<p>
					Nam maximus quam est, et sodales sapien porta maximus. Vestibulum
					commodo ex quis neque ornare elementum ut at orci. Mauris ullamcorper
					sit amet libero sed consequat. In augue mauris, efficitur maximus
					dapibus in, eleifend eu est. Nullam condimentum tortor sed augue
					porttitor, eu semper diam ultrices. Curabitur vel vestibulum quam, at
					dictum orci.
				</p>
			</div>
			<TechsList {techs} />
		</div>
		<ProjectItemGallery />
	</div>
</div>
