type Props = {

  children: string;
};
export function Button({children, ...props }: Props) {
    
  return (
    <button
    className="button" {...props}> 
      {children}
    </button>
  );
}
