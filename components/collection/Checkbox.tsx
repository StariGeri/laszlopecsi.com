interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    label: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    defaultChecked?: boolean;
}

const Checkbox = ({ label, name, value, onChange, checked,defaultChecked }: CheckboxProps) => {

    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                className="rounded-sm border-black w-5 h-5 accent-primaryOrange"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                checked={checked}
                defaultChecked={defaultChecked}
            />
            <h3 className="font-body font-medium text-base md:text-lg lg:text-xl">{label}</h3>
        </div>
    );

}

export default Checkbox;