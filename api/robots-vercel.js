export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex');
  res.status(200).send(`# This is the Vercel deployment. The canonical site is https://www.niket.live
# All crawlers are blocked on this domain.

User-agent: *
Disallow: /

# Canonical domain
Host: https://www.niket.live
`);
}
