/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The footer element with the current year and author information.
 */
export default function Footer(): JSX.Element {
    const year = (new Date()).getFullYear();
    return (    
        <footer>
            <br /><hr /> &copy; {year} Kyle Tolliver - Security Attack
        </footer>
    );
}
