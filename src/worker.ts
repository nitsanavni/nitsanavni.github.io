// Serves the built site from dist/ and redirects www.nitsanavni.com to nitsanavni.com.
interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === 'www.nitsanavni.com') {
      url.hostname = 'nitsanavni.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
