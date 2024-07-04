const { default: Link } = require("next/link")

const Logo = () => {
    return (
        <Link href='/'><span className="text-2xl font-bold italic ">Muin.dev</span></Link>
    );
};

export default Logo;