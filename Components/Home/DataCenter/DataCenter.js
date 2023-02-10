import Image from "next/image";
import css from './DataCenter.module.css'

const DataCenter = () => {
    return (
        <div className={css.bg}>
            
            <div className="md:max-w-[1140px] md:mx-auto">
                <div className="font-semibold text-center">
                        <h4 className="mb-10">LEARN ABOUT</h4>
                        <h2 className="text-2xl md:text-5xl mb-10"> We Have Capacity For 20 TBPS & Global <br></br> 99+ Data Centers</h2>
                        <p className="mb-10">Enjoy high speed performance from our data centers all over the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-3">
        <ul className="font-semibold text-2xl md:text-3xl">
        <li className="mb-5"> <span className="font-bold mr-2">AM1</span>Amsterdam, Netherlands</li>
        <li className="mb-5"> <span className="font-bold mr-2">AM2</span>Amsterdam, Netherlands</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG1</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG2</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG3</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG4</span>Singapore</li>
       </ul>
        <ul className="font-semibold text-2xl md:text-3xl">
        <li className="mb-5"> <span className="font-bold mr-2">AM1</span>Amsterdam, Netherlands</li>
        <li className="mb-5"> <span className="font-bold mr-2">AM2</span>Amsterdam, Netherlands</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG1</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG2</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG3</span>Singapore</li>
        <li className="mb-5"> <span className="font-bold mr-2">SG4</span>Singapore</li>
       </ul>
                    
                    
                    
                </div>
                   
            </div>
        </div>
    );
};

export default DataCenter;