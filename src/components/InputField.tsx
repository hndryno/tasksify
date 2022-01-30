import React, { useRef } from 'react';
import './styles.css'; 

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>; //didapat dari hover setTodo
    handleAdd: (e: React.FormEvent) => void; // fungsi yang tidak menampilkan apa apa
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return <form action="" className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
    >
            <input ref={inputRef} type="input" placeholder="enter the task" className="input__box" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="input_submit" type="submit">Go</button>
    </form>
};

export default InputField;
