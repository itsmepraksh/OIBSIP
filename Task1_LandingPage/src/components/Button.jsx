 

const Button = ({text,className,icon}) => {
  return (
    <>
      <div className={`cta-btn w-fit py-2 px-4 text-white text-xs font-medium rounded bg-[#104026] active:scale-[0.9] ${className}`}>{text}{icon}</div>
    </>
  )
}

export default Button