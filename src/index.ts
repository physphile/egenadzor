import { Elysia, Context } from "elysia";
import { auth } from "./lib/auth";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { OpenAPI } from "./OpenAPI";
 
const betterAuthView = (context: Context) => {
    const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"]
    // validate request method
    if(BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
        return auth.handler(context.request);
    } else {
        context.error(405)
    }
}
 
const app = new Elysia().use(cors()).use(swagger({
  documentation: {
      components: await OpenAPI.components,
      paths: await OpenAPI.getPaths()
  }
})).all("/api/auth/*", betterAuthView).listen(3000);
 
console.log(
`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/swagger`
);