<script>
	import LinkedinFilled from './LinkedinFilled.svelte';
	import {
		IconAt,
		IconBrandTwitterFilled,
		IconBrandGithubFilled
	} from '@tabler/icons-svelte';
	export let size = 28
	export let justify = true
</script>

<nav>
	<ul class:justify-center={justify} class="flex flex-row align-top gap-5 md:justify-start">
		<li>
			<a href="mailto:medinamarquezp@gmail.com" target="_blank"
				><IconAt class="hover-scale" {size} stroke={3} />
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/medinamarquezp" target="_blank"
				><LinkedinFilled className="hover-scale" {size} /></a
			>
		</li>
		<li>
			<a href="https://twitter.com/medinamarquezp" target="_blank"
				><IconBrandTwitterFilled class="hover-scale" {size} /></a
			>
		</li>
		<li>
			<a href="https://github.com/medinamarquezp" target="_blank"
				><IconBrandGithubFilled class="hover-scale" {size} /></a
			>
		</li>
	</ul>
</nav>
