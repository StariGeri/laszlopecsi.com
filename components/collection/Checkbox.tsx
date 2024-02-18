interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, name, value, onChange }: CheckboxProps) => {

    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                className="rounded-sm border-black w-4 h-4  md:w-5 md:h-5 accent-primaryOrange"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            />
            <h3 className="font-body font-medium text-base md:text-lg lg:text-xl">{label}</h3>
        </div>
    );

}

export default Checkbox;