import { exhibitions } from "@/constants/Exhibitions";
import Accordion from "../shared/Accordion";

const Exhibitions = () => {

    return (
        <Accordion title="Exhibitions">
            {exhibitions.map((exhibition, index) => (
                <div
                    key={index}
                    className="pt-2 last:pb-2"
                >
                    <p className="font-body text-base md:text-[20px] lg:text-[24px]">{exhibition}</p>
                </div>
            ))}
        </Accordion>
    );

};

export default Exhibitions;