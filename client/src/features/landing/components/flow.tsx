interface FlowProps {
    hoveredCard: string | null;
}

// todo les valeurs de strokes sont hard code il faudrait quelle soit recuperer a partir du fichier css

export function Flow({ hoveredCard }: FlowProps) {
    return (
        <div className="h-[267px] relative w-full">
            <svg width="100%" height="267" viewBox="0 0 802 267" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <path d="M400.575 267C400.572 78.2013 0.998883 166.672 1 0" stroke="#CBCBCB" strokeWidth="2"/>
                <path d="M400.575 267C400.577 78.2013 800.151 166.672 800.149 0" stroke="#CBCBCB" strokeWidth="2"/>
                <path d="M264.91 0C264.91 113.204 400.575 157.803 400.575 260.418V267" stroke="#CBCBCB" strokeWidth="2"/>
                <path d="M527.76 0C527.76 113.204 400.575 157.803 400.575 260.418V267" stroke="#CBCBCB" strokeWidth="2"/>

                <g opacity="1">
                    <path d="M400.575 267C400.572 78.2013 0.998883 166.672 1 0" fill="none" stroke="url(#grad-left)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M400.575 267C400.577 78.2013 800.151 166.672 800.149 0" fill="none" stroke="url(#grad-right)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M264.91 0C264.91 113.204 400.575 157.803 400.575 260.418V267" fill="none" stroke="url(#grad-orange)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M527.76 0C527.76 113.204 400.575 157.803 400.575 260.418V267" fill="none" stroke="url(#grad-gold)" strokeWidth="2" strokeLinecap="round"/>

                    <defs>
                        <radialGradient id="grad-left" r="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FF6164"/>
                            <stop offset="0.4" stopColor="#FF6164"/>
                            <stop offset="1" stopColor="#FF6164" stopOpacity="0"/>
                            <animate attributeName="cx" values="1;1;400;400" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="cy" values="0;0;267;267" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="r" values="0;200;200;0" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                        </radialGradient>

                        <radialGradient id="grad-right" r="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#61DAFB"/>
                            <stop offset="0.4" stopColor="#61DAFB"/>
                            <stop offset="1" stopColor="#61DAFB" stopOpacity="0"/>
                            <animate attributeName="cx" values="800;800;400;400" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="cy" values="0;0;267;267" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="r" values="0;200;200;0" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                        </radialGradient>

                        <radialGradient id="grad-orange" r="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FF9758"/>
                            <stop offset="0.4" stopColor="#FF9758"/>
                            <stop offset="1" stopColor="#FF9758" stopOpacity="0"/>
                            <animate attributeName="cx" values="264;264;400;400" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="cy" values="0;0;267;267" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="r" values="0;150;150;0" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                        </radialGradient>

                        <radialGradient id="grad-gold" r="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#BD34FE"/>
                            <stop offset="0.083" stopColor="#BD34FE"/>
                            <stop offset="1" stopColor="#BD34FE" stopOpacity="0"/>
                            <animate attributeName="cx" values="527;527;400;400" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="cy" values="0;0;267;267" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                            <animate attributeName="r" values="0;150;150;0" keyTimes="0;0.1;0.7;1" dur="3s" repeatCount="indefinite"/>
                        </radialGradient>
                    </defs>
                </g>

                <g>
                    <path 
                        className="transition-opacity duration-300"
                        style={{ opacity: hoveredCard === 'bun' || hoveredCard === 'all' ? 1 : 0 }}
                        d="M400.575 267C400.572 78.2013 0.998883 166.672 1 0" 
                        fill="none" 
                        stroke="#FF6164" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    />
                    <path 
                        className="transition-opacity duration-300"
                        style={{ opacity: hoveredCard === 'react' || hoveredCard === 'all' ? 1 : 0 }}
                        d="M400.575 267C400.577 78.2013 800.151 166.672 800.149 0" 
                        fill="none" 
                        stroke="#61DAFB" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    />
                    <path 
                        className="transition-opacity duration-300"
                        style={{ opacity: hoveredCard === 'hono' || hoveredCard === 'all' ? 1 : 0 }}
                        d="M264.91 0C264.91 113.204 400.575 157.803 400.575 260.418V267" 
                        fill="none" 
                        stroke="#FF9758" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    />
                    <path 
                        className="transition-opacity duration-300"
                        style={{ opacity: hoveredCard === 'vite' || hoveredCard === 'all' ? 1 : 0 }}
                        d="M527.76 0C527.76 113.204 400.575 157.803 400.575 260.418V267" 
                        fill="none" 
                        stroke="#BD34FE" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    />
                </g>
            </svg>
        </div>
    );
}


