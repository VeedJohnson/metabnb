import { createContext, useCallback, useContext, useState } from "react";

export const ModalContext = createContext();


const ModalProvider = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = useCallback(() => {
        setIsVisible(prev => !prev)
    }, []);
    
    return (
        <ModalContext.Provider value={{isVisible, toggleVisibility}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext);

export default ModalProvider;