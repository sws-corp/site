import { Flow } from "../components/flow";
import { Badge } from "@/components/global/badge"
import bun_logo from "@/assets/stacks/bun.svg"
import hono_logo from "@/assets/stacks/hono.svg"
import react_logo from "@/assets/stacks/react.svg"
import vite_logo from "@/assets/stacks/vite.svg"
import nuit_et_jour from "@/assets/stacks/nuit-et-jour.svg"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Stacks() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-col items-center p-8 md:p-28 gap-8 md:gap-12" id="nuit-et-jour">
            <div className="flex flex-col gap-3 items-center text-center">
                <Badge text={t('landing.stacks.badge')} />
                <h1 className="text-[20px] md:text-[24px] leading-[24px] md:leading-[29px] font-medium">{t('landing.stacks.title')}</h1>
                <p className="text-muted-foreground text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] px-4">{t('landing.stacks.subtitle')}</p>
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="hidden md:flex w-full justify-center mb-[-1px]">
                    <svg width="901" height="458" viewBox="0 0 901 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M452.723 0.00711639C452.867 0.00782249 453.011 0.00805239 453.154 0.00889548C453.351 0.0102613 453.548 0.0124875 453.745 0.0142328C562.405 0.792988 661.921 40.6486 739.352 106.437C770.146 132.601 797.447 162.866 820.441 196.406C838.746 223.107 854.322 251.882 866.758 282.316C878.005 309.841 886.683 338.723 892.489 368.652C898.072 397.436 901 427.189 901 457.635V458H0V457.635C0 427.189 2.92759 397.436 8.5114 368.652C14.3174 338.723 22.9953 309.841 34.2423 282.316C46.6778 251.882 62.2538 223.107 80.5589 196.406C103.553 162.866 130.854 132.601 161.648 106.437C239.671 40.1458 340.117 0.184598 449.748 0.00266865C449.822 0.00230841 449.896 0 449.971 0C450.011 1.04465e-07 450.051 0.00167384 450.091 0.0017791C450.227 0.00165586 450.364 0 450.5 0L450.8 0.0017791C450.876 0.00172178 450.953 2.5604e-08 451.029 0C451.594 0 452.159 0.00399979 452.723 0.00711639ZM814.63 369.086C819.16 397.621 821.544 427.105 821.563 457.271H900.269C900.246 427.102 897.345 397.618 891.829 369.086H814.63ZM711.729 369.086C714.983 397.62 716.694 427.104 716.708 457.271H820.834C820.815 427.1 818.429 397.617 813.894 369.086H711.729ZM590.119 369.086C591.863 397.62 592.781 427.104 592.789 457.271H715.979C715.965 427.101 714.252 397.617 710.996 369.086H590.119ZM450.865 457.271H592.06C592.052 427.102 591.133 397.618 589.388 369.086H450.967L450.865 457.271ZM310.553 369.086C308.808 397.618 307.889 427.102 307.881 457.271H450.135L450.237 369.086H310.553ZM190.004 369.086C186.748 397.617 185.035 427.101 185.021 457.271H307.153C307.16 427.104 308.078 397.62 309.822 369.086H190.004ZM88.1644 369.086C83.6299 397.617 81.2444 427.1 81.2254 457.271H184.292C184.306 427.104 186.017 397.62 189.271 369.086H88.1644ZM9.17078 369.086C3.65517 397.618 0.753764 427.102 0.730566 457.271H80.4957C80.5147 427.105 82.8985 397.621 87.4285 369.086H9.17078ZM793.566 282.819C802.705 310.104 809.769 338.717 814.516 368.358H891.688C885.907 338.712 877.304 310.099 866.174 282.819H793.566ZM696.599 282.819C703.163 310.103 708.238 338.716 711.647 368.358H813.78C809.027 338.711 801.952 310.098 792.802 282.819H696.599ZM582.009 282.819C585.527 310.102 588.246 338.715 590.074 368.358H710.913C707.5 338.712 702.421 310.099 695.85 282.819H582.009ZM450.968 368.358H589.343C587.515 338.712 584.794 310.099 581.274 282.819H451.067L450.968 368.358ZM318.667 282.819C315.147 310.099 312.426 338.712 310.598 368.358H450.238L450.338 282.819H318.667ZM205.15 282.819C198.579 310.099 193.499 338.712 190.087 368.358H309.867C311.695 338.715 314.414 310.102 317.932 282.819H205.15ZM109.257 282.819C100.106 310.098 93.0317 338.711 88.2792 368.358H189.353C192.762 338.716 197.837 310.103 204.401 282.819H109.257ZM34.826 282.819C23.696 310.099 15.0927 338.712 9.31226 368.358H87.5433C92.2895 338.717 99.354 310.104 108.493 282.819H34.826ZM755.625 196.976C770.504 223.451 783.18 251.957 793.322 282.09H865.875C853.518 251.95 838.076 223.443 819.947 196.976H755.625ZM669.345 196.976C680.034 223.45 689.139 251.957 696.425 282.09H792.557C782.396 251.949 769.697 223.442 754.792 196.976H669.345ZM567.402 196.976C573.131 223.449 578.009 251.956 581.915 282.09H695.675C688.379 251.949 679.26 223.443 668.558 196.976H567.402ZM451.068 282.09H581.18C577.271 251.951 572.389 223.444 566.655 196.976H451.166L451.068 282.09ZM333.286 196.976C327.552 223.444 322.67 251.951 318.762 282.09H450.339L450.438 196.976H333.286ZM232.442 196.976C221.74 223.443 212.621 251.949 205.325 282.09H318.026C321.932 251.956 326.81 223.449 332.539 196.976H232.442ZM147.267 196.976C132.361 223.442 119.663 251.949 109.502 282.09H204.575C211.861 251.957 220.966 223.45 231.655 196.976H147.267ZM81.0527 196.976C62.9242 223.443 47.4821 251.95 35.125 282.09H108.737C118.879 251.957 131.555 223.451 146.434 196.976H81.0527ZM689.231 107.078C714.266 133.055 736.476 163.046 755.213 196.248H819.447C796.597 163.025 769.51 133.032 738.982 107.078H689.231ZM621.647 107.078C627.591 115.662 633.313 124.683 638.795 134.113C649.906 153.223 660.036 174.016 669.049 196.248H754.38C735.59 163.024 713.318 133.031 688.217 107.078H621.647ZM541.832 107.078C545.027 115.685 548.103 124.73 551.049 134.187C556.996 153.276 562.417 174.044 567.243 196.248H668.263C659.29 174.15 649.212 153.481 638.165 134.479C632.603 124.912 626.795 115.769 620.761 107.078H541.832ZM451.167 196.248H566.496C561.684 174.122 556.279 153.428 550.353 134.405C547.381 124.865 544.278 115.746 541.055 107.078H451.271L451.167 196.248ZM358.887 107.078C355.663 115.746 352.56 124.865 349.588 134.405C343.661 153.428 338.257 174.122 333.445 196.248H450.439L450.542 107.078H358.887ZM280.239 107.078C274.205 115.769 268.397 124.912 262.835 134.479C251.788 153.481 241.71 174.15 232.737 196.248H332.698C337.524 174.044 342.945 153.276 348.892 134.187C351.838 124.73 354.914 115.685 358.109 107.078H280.239ZM213.842 107.078C188.741 133.031 166.469 163.024 147.679 196.248H231.951C240.964 174.016 251.094 153.223 262.204 134.113C267.687 124.683 273.409 115.662 279.353 107.078H213.842ZM162.018 107.078C131.49 133.032 104.403 163.025 81.5528 196.248H146.845C165.583 163.046 187.793 133.055 212.828 107.078H162.018ZM489.167 2.39466C564.639 11.9232 633.39 49.4209 688.529 106.35H738.12C669.438 48.2527 583.451 10.55 489.167 2.39466ZM471.713 1.43306C528.392 9.11102 580.044 47.2869 621.144 106.35H687.509C628.344 45.4858 553.569 7.01014 471.713 1.43306ZM459.419 0.983841C475.795 4.39808 491.375 16.6172 505.713 36.0836C518.778 53.8218 530.84 77.6127 541.562 106.35H620.254C576.336 43.4163 520.466 4.45412 459.419 0.983841ZM451.271 106.35H540.783C530.102 77.7705 518.103 54.132 505.127 36.5151C488.526 13.9767 470.376 1.35496 451.393 0.753447L451.271 106.35ZM449.315 0.735656C430.054 1.01672 411.638 13.6733 394.814 36.5151C381.839 54.132 369.839 77.7705 359.158 106.35H450.543L450.665 0.735656C450.531 0.733586 450.397 0.73297 450.262 0.732098C449.946 0.732891 449.63 0.733885 449.315 0.735656ZM440.095 1.07457C379.628 5.08761 324.308 43.9273 280.746 106.35H358.379C369.101 77.6129 381.162 53.8218 394.227 36.0836C408.44 16.7864 423.875 4.61078 440.095 1.07457ZM428.136 1.5914C347.145 7.70461 273.182 46.0338 214.55 106.35H279.856C320.678 47.6867 371.909 9.62706 428.136 1.5914ZM415.108 2.12335C319.541 9.68027 232.357 47.5805 162.88 106.35H213.53C269.209 48.864 338.767 11.1918 415.108 2.12335Z" fill="#CBCBCB"/>
                    </svg>

                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-4  border-t border-l divide-x divide-y md:divide-y-0 border-b-0 md:border-b-2">
                    <div 
                        className="h-[120px] md:h-[165px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors md:hover:bg-[#FF6164]/10"
                        onClick={() => window.open('https://bun.sh', '_blank')}
                        onMouseEnter={() => setHoveredCard('bun')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="scale-75 md:scale-100">
                            <img src={bun_logo} alt="Bun" draggable="false" />
                        </div>
                        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Bun</p>
                    </div>
                    <div 
                        className="h-[120px] md:h-[165px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors md:hover:bg-[#FF9758]/10"
                        onClick={() => window.open('https://hono.dev', '_blank')}
                        onMouseEnter={() => setHoveredCard('hono')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="scale-75 md:scale-100">
                            <img src={hono_logo} alt="Hoono" draggable="false" />
                        </div>
                        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Hono</p>
                    </div>
                    <div 
                        className="h-[120px] md:h-[165px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors md:hover:bg-[#BD34FE]/10"
                        onClick={() => window.open('https://vitejs.dev', '_blank')}
                        onMouseEnter={() => setHoveredCard('vite')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="scale-75 md:scale-100">
                            <img src={vite_logo} alt="Vite" draggable="false" />
                        </div>
                        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">Vite</p>
                    </div>
                    <div 
                        className="border-r md:border-b-0 border-b-2 h-[120px] md:h-[165px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors md:hover:bg-[#61DAFB]/10"
                        onClick={() => window.open('https://react.dev', '_blank')}
                        onMouseEnter={() => setHoveredCard('react')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="scale-75 md:scale-100">
                            <img src={react_logo} alt="React" draggable="false" />

                        </div>
                        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">React</p>
                    </div>
                </div>

                <div className="hidden md:block w-full">
                    <Flow hoveredCard={hoveredCard} />
                </div>

                <div 
                    className="w-full md:w-fit border-x border-b md:border-t h-[120px] md:h-[165px] px-8 md:px-14 flex flex-col items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
                    onClick={() => window.open('https://github.com/sws-corp/nuit-et-jour', '_blank')}
                    onMouseEnter={() => setHoveredCard('all')}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div 
                        className="absolute opacity-0 md:group-hover:opacity-20 transition-opacity duration-300" 
                        style={{
                            width: '200%',
                            height: '200%',
                            top: '-50%',
                            left: '-50%',
                            background: 'conic-gradient(from 0deg, #FF6164, #FF9758, #BD34FE, #61DAFB, #FF6164)',
                            animation: 'spin 3s linear infinite',
                            filter: 'blur(20px)'
                        }}
                    />
                    <div className="relative z-10 scale-75 md:scale-100">
                        <img src={nuit_et_jour} alt="Nuit et Jour" draggable="false" />
                    </div>
                    <p className="text-muted-foreground text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] relative z-10">Nuit et Jour</p>
                </div>
            </div>
        </div>
    );
}
