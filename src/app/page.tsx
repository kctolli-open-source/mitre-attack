import Components from '../common/main';

/**
 * Render the Home component.
 * Dependent on Components Class
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <main>
      <Components.Router routes={Components.routes} />
      <Components.Footer />
    </main>
  );
}
