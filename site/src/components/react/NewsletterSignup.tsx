import { useState } from 'react';

/**
 * Lightweight newsletter signup. Hydrate with `client:visible` so it costs
 * zero JS until it scrolls into view — preserves Lighthouse score.
 *
 * Wire `endpoint` to Buttondown / ConvertKit / Resend later.
 */
export default function NewsletterSignup({
  endpoint = '/api/subscribe',
  heading = 'Get the next renovation guide in your inbox.',
  blurb = 'One email a week. No sponsored junk. Unsubscribe anytime.',
}: {
  endpoint?: string;
  heading?: string;
  blurb?: string;
}) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || state === 'loading') return;
    setState('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed');
      setState('done');
      setMessage("You're in. Check your inbox.");
      setEmail('');
    } catch {
      setState('error');
      setMessage('Something went wrong. Try again in a moment.');
    }
  }

  return (
    <section className="not-prose my-12 rounded-2xl border border-line bg-surface p-6 md:p-8">
      <p className="font-display text-xl md:text-2xl tracking-tight">{heading}</p>
      <p className="text-sm text-muted mt-2 max-w-md">{blurb}</p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md">
        <label className="sr-only" htmlFor="nl-email">Email address</label>
        <input
          id="nl-email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === 'loading' || state === 'done'}
          className="flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm focus:outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={state === 'loading' || state === 'done'}
          className="rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-brand transition disabled:opacity-60"
        >
          {state === 'loading' ? 'Sending…' : state === 'done' ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p
          role="status"
          className={`text-xs mt-3 ${state === 'error' ? 'text-red-600' : 'text-brand'}`}
        >{message}</p>
      )}
    </section>
  );
}
