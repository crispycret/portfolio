import useIsMobile from "../hooks/useIsMobile";

export interface GradientTextInterface {
    text: string,
    fontSize: number,
    x:number,
    y:number,
    height:number,
}

export const GradientText = (props: GradientTextInterface) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width='100%' height={`${props.height}em`}>
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#7a78ee', stopOpacity:'1'}} />
                <stop offset="100%" style={{stopColor: '#67a6d0', stopOpacity:'1'}} />
                </linearGradient>
            </defs>
            <text fill="url(#grad1)" fontSize={props.fontSize} fontFamily="Verdana" x={`${props.x}%`} y={`${props.y}%`}>
                {props.text}
            </text>
        </svg>
    )    

}


export default GradientText;
