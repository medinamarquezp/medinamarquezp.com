<script>
	import LatestNews from '$lib/components/ui/latest-news/LatestNews.svelte';
	import { IconBrandTwitterFilled } from '@tabler/icons-svelte';
</script>

<svelte:head>
	<link href="https://unpkg.com/pattern.css" rel="stylesheet" />
</svelte:head>

<div
	class="mx-8 sm:mx-16 lg:mx-60 my-12 text-xl animate-fade animate-once animate-duration-300 animate-ease-in"
>
	<span class="text-slate-500">24 de abril de 2023</span>
	<h1 class="text-4xl font-bold">
		Lorem ipsum dolor sit amet, consectetur adipiscing.
	</h1>
	<div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-5 mb-4 items-center">
		<div class="badge badge-lg bg-secondary">Emprendimiento</div>
		<div class="text-lg text-slate-500">
			{' ☕️ '.repeat(3)} <span class="pl-1">(Léelo en 10 minutos)</span>
		</div>
	</div>
	<div
		class="mt-12 -ml-8 mb-5 sm:mt-14 pattern-dots-md text-secondary rounded-xl"
	>
		<img
			class="rounded-lg -translate-y-6 translate-x-6"
			src="https://images.unsplash.com/photo-1453799527828-cf1bd7b2f682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2912&q=80"
			alt="test"
		/>
	</div>
	<div class="leading-relaxed">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor,
			elit ac pharetra porttitor, ligula arcu vulputate massa, at feugiat sapien
			diam sed turpis. Interdum et malesuada fames ac ante ipsum primis in
			faucibus. Praesent egestas eget ligula ac pretium. Praesent id velit at
			erat dictum lobortis a et turpis. Vivamus faucibus dolor nec volutpat
			pretium. Aliquam sit amet fringilla augue. Donec a laoreet arcu, nec
			viverra leo. Pellentesque facilisis nec massa vitae auctor. Quisque
			fermentum nisi at dui eleifend, vel ultricies odio pellentesque. Nulla
			pharetra elementum massa ullamcorper fringilla. Aliquam turpis sem,
			pharetra non tincidunt eu, elementum vel mauris. Fusce sagittis elementum
			metus non suscipit. Proin vestibulum tristique elit at iaculis. Etiam
			porttitor lorem lectus, a aliquet eros cursus eget. Sed id mi sit amet mi
			sodales varius eu quis lorem. Maecenas quis neque a metus efficitur
			ultricies.
		</p>
		<p>
			Nam maximus quam est, et sodales sapien porta maximus. Vestibulum commodo
			ex quis neque ornare elementum ut at orci. Mauris ullamcorper sit amet
			libero sed consequat. In augue mauris, efficitur maximus dapibus in,
			eleifend eu est. Nullam condimentum tortor sed augue porttitor, eu semper
			diam ultrices. Curabitur vel vestibulum quam, at dictum orci. Vestibulum
			ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
			curae; Fusce tortor mi, ornare et mattis a, venenatis vitae justo. Morbi
			porttitor sodales volutpat. Nunc tristique augue sollicitudin, condimentum
			risus a, elementum purus. Maecenas nec nunc in dolor sollicitudin cursus.
			Aenean libero odio, pulvinar id tincidunt nec, ultrices eu felis.
		</p>
		<p>
			Curabitur fringilla hendrerit nunc id suscipit. Integer quis magna vitae
			eros commodo facilisis nec nec sapien. Praesent vitae sodales neque. Duis
			tincidunt tristique turpis. Morbi eu sagittis dolor. Vestibulum ante ipsum
			primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
			elementum felis sed libero condimentum cursus. Integer vestibulum nulla
			eget justo viverra cursus. Ut mollis laoreet est, et egestas mi porta
			quis. Integer ultricies lacus eget felis molestie rutrum.
		</p>
		<p>
			Suspendisse eu rutrum ipsum, eget lobortis justo. Pellentesque ullamcorper
			aliquet orci ut malesuada. Sed at purus ante. Fusce laoreet ullamcorper
			massa at commodo. Donec fermentum dictum blandit. Vivamus tincidunt
			fermentum augue, sit amet dapibus felis bibendum at. Nam sed sagittis
			quam. Integer aliquet bibendum justo, sit amet dictum elit accumsan quis.
			Nullam id lacinia dui, id scelerisque dolor. Vestibulum viverra, dolor
			quis lacinia consequat, ipsum mi vestibulum urna, vel pulvinar orci leo
			eget augue. In hac habitasse platea dictumst. Proin gravida magna sed
			ullamcorper molestie.
		</p>
		<p>
			Fusce diam elit, ultrices in arcu eu, aliquet convallis nibh. Phasellus ut
			imperdiet quam, et pretium neque. Suspendisse ipsum lorem, gravida a
			dictum eget, sodales sed velit. Ut sollicitudin dignissim nunc euismod
			lacinia. Pellentesque habitant morbi tristique senectus et netus et
			malesuada fames ac turpis egestas. Nulla at elit at lectus lacinia
			scelerisque sed a erat. Class aptent taciti sociosqu ad litora torquent
			per conubia nostra, per inceptos himenaeos. Praesent posuere velit dolor.
			Praesent arcu tortor, porta blandit pharetra in, cursus vitae dui.
		</p>
	</div>
	<div class="flex justify-center mt-8">
		<a
			class="flex flex-row font-normal text-white gap-2 items-center py-4 px-6 rounded-full bg-blue-500 hover-scale"
			href="/"><IconBrandTwitterFilled size={22} /> Compartelo en Twitter 💪</a
		>
	</div>
</div>
<div class="mx-6 sm:mx-12 lg:mx-24 mt-0 mb-12 text-xl">
	<LatestNews title="🤔 También podría interesarte" />
</div>
