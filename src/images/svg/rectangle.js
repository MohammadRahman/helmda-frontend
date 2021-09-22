
const Rectagle = ({color}) => {
    return(
    <svg width="100" height="5" viewBox="0 0 100 5" fill={color?color:"#323232"} xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="5" transform="matrix(1 0 0 -1 0 5)" />
    </svg>

)}

export default Rectagle;
