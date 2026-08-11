



Core Idea: NextAuth provides authentication in Next.js using a special dynamic API route [...nextauth]. This route automatically handles all endpoints like /api/auth/signin, /api/auth/signout, /api/auth/session, and /api/auth/callback.

Files Needed:

app/api/auth/[...nextauth]/route.js → backend configuration of providers (GitHub, Google, Credentials, etc.).

.env.local → stores secrets (GITHUB_ID, GITHUB_SECRET, NEXTAUTH_URL, NEXTAUTH_SECRET).

app/components/sessionWrapper.js → wraps your app with SessionProvider.

app/layout.js → imports SessionWrapper so session data is available globally.

Frontend pages (e.g., app/page.js) → use signIn(), signOut(), and useSession().

Environment Variables:

GITHUB_ID and GITHUB_SECRET → from GitHub OAuth app.

GOOGLE_ID and GOOGLE_SECRET → from Google OAuth app (if used).

NEXTAUTH_URL → base URL of your app (e.g., http://localhost:3000).

NEXTAUTH_SECRET → random string for session encryption.

Workflow:

User clicks Sign in → NextAuth redirects to provider login page (e.g., GitHub).

Provider authenticates user → redirects back to /api/auth/callback/provider.

NextAuth exchanges code for token → creates session.

Session data (user info) is available via useSession() in frontend.

User can sign out → session cleared via /api/auth/signout.

Default vs Custom Sign‑In Page:

Default: /api/auth/signin automatically lists all providers.

Custom: You can create your own /signin page and configure it in [...nextauth].

Key Points Learned:

Always export both GET and POST in [...nextauth]/route.js.

Redirects are handled automatically by NextAuth.

You don’t need to memorize boilerplate code — just reuse the template and update providers/env variables.

Multiple providers can be added by extending the providers array.

SessionProvider makes session data accessible across your app.