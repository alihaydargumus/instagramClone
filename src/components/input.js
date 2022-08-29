import React, {useEffect, useRef, useState} from 'react';

function Input({label, type='text', ...props}) {
    const inputRef = useRef();
    const [show, setShow] = useState(false)
    const [inputtype, setInputtype] = useState(type)

    useEffect(() => {
        if(show){
            setInputtype('text')
        }else if (type === 'password') {
            setInputtype('password')
        }
        inputRef.current.focus()
    }, [show])

    return (
        <label className="block relative flex bg-zing-50 border rounded-sm focus-within:border-gray-400">
            <input ref={inputRef} required={true} type={inputtype}
                   className="px-2 text-xs outline-none w-full h-[38px] valid:pt-[10px] peer" {...props}/>
            <small
                className="absolute top-1/2 left-[9px] -translate-y-1/2 cursor-text text-xs text-gray-400 peer-valid:text-[10px] peer-valid:top-2">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" onClick={() => setShow(!show)}
                        className="h-full flex items-center text-sm font-semibold pr-2">
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
    );
}

export default Input;