const Container = ({ children, style, className }) => {
	return (
		<div className={`lg:w-pc m-auto ${className?className:""}`} style={style}>
			{children}
		</div>
	);
};
export default Container;
