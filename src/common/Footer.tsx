export default function Footer() {
    return (
        <footer>
            &copy; {(new Date()).getFullYear()} Kyle Tolliver - <a href="/">Security Attack</a>
            <br /> 
            All rights reserved - <a href="https://attack.mitre.org">Mitre ATT&CK</a>
        </footer>
    );    
}
