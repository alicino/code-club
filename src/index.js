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
 
// export default {
// 	fetch(request) {
// 		if(request.url =="https://code-club.alicino-lab.workers.dev/") {
// 			return new Response('Hello worker!', {
// 				headers: {
// 					'content-type': 'text/plain',
// 				},
// 			});
// 		}
// 		else{
// 			return new Response('Error Worker!', {
// 				headers: {
// 					'content-type': 'text/plain',
// 				},
// 			});
// 		}
// 	},
//  };
 
export default {
	fetch(request) {
	  // Check if the request URL matches
	  if (request.url === "https://code-club.alicino-lab.workers.dev/") {
		// Check if the request method is POST
		if (request.method === "POST") {
		  // Create a JSON response
		  const responseBody = { message: "Hello from POST request!" };
		  const responseInit = {
			status: 200,
			headers: {
			  "content-type": "application/json",
			},
		  };
		  return new Response(JSON.stringify(responseBody), responseInit);
		} else {
		  // For other request methods, return the original response
		  return new Response('Hello worker!', {
			headers: {
			  'content-type': 'text/plain',
			},
		  });
		}
	  } else {
		return new Response('Error Worker!', {
		  headers: {
			'content-type': 'text/plain',
		  },
		});
	  }
	},
  };
  