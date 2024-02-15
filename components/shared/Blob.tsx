interface BlobProps extends React.SVGProps<SVGSVGElement> {
    fillOpacity?: string;
    className?: string;
}

const Blob = ({ fillOpacity, className }: BlobProps) => {

    const opacity = fillOpacity || '0.2';
    const classes = className || '';

    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={classes}>
            <path fill="#FF5C0A" fillOpacity={opacity} d="M50,-57C62.7,-49,69.4,-31.2,67.4,-15.8C65.4,-0.5,54.7,12.5,46.6,27.3C38.5,42.2,33.1,59.1,22.7,63.3C12.3,67.6,-3.1,59.2,-20,53.6C-36.8,48,-55.1,45.2,-63.2,34.7C-71.3,24.3,-69.3,6.2,-66.8,-12.4C-64.2,-31,-61.2,-50.2,-50,-58.5C-38.8,-66.8,-19.4,-64.2,-0.4,-63.8C18.7,-63.3,37.3,-65,50,-57Z" transform="translate(100 100)" />
        </svg>

    );
}

export default Blob;