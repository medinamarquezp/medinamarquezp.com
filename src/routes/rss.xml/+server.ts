import { generateFeed } from '$lib/feed/index.js';

export const prerender = true;

export async function GET() {
	const headers = { 'Content-Type': 'application/xml' };
	const xml = await generateFeed();
	return new Response(xml, { headers });
}
