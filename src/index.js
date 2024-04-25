/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello World!');
// 	},
// };

// export default {
// 	fetch(request) {
// 		console.log(request.url);
// 		return new Response('Hello worker!', {
// 			headers: {
// 				'content-type': 'text/plain',
// 			},
// 		});
// 	},
//  };
 
export default {
	fetch(request) {
		if(request.url =="https://code-club.alicino-lab.workers.dev/") {
			return new Response('Hello worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
		else{
			return new Response('Error Worker!', {
				headers: {
					'content-type': 'text/plain',
				},
			});
		}
	},
 };
 
