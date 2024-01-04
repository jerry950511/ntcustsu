
const Modal = ({children}) => {
    return (
        <div className="absolute top-0 right-0 z-50 w-full h-max bg-stone-300/50 backdrop-blur-sm">
            <div className="w-full h-full m-auto flex items-center justify-center p-12">
                <div className="bg-white min-w-mobile-sm w-full max-w-tablet h-full px-10 py-5 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;