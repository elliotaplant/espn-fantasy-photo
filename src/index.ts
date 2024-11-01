import {
  R2Bucket,
  ExecutionContext,
} from '@cloudflare/workers-types';

interface Env {
  ESPN_FANTASY_PHOTOS_BUCKET: R2Bucket;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);
    const key: string = url.pathname.slice(1);

		if (!key) {
			// return HTML page
		}

    switch (request.method) {
      case 'PUT': {
        await env.ESPN_FANTASY_PHOTOS_BUCKET.put(key, request.body);
        return new Response(`Put ${key} successfully!`);
      }

      case 'GET': {
        const object = await env.ESPN_FANTASY_PHOTOS_BUCKET.get(key);

        if (object === null) {
          return new Response('Object Not Found', { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);

        return new Response(object.body, {
          headers,
        });
      }

      case 'DELETE': {
        await env.ESPN_FANTASY_PHOTOS_BUCKET.delete(key);
        return new Response('Deleted!');
      }

      default:
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'PUT, GET, DELETE',
          },
        });
    }
  },
} satisfies ExportedHandler<Env>;
