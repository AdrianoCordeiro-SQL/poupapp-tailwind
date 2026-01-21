export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-transparent
       border 
       border-neutral-text 
       text-neutral-text
       py-3
       px-6
       flex
       items-center
       justify-center
       cursor-pointer
       gap-2
       rounded-3xl
       text-base
       leading-[120%]
       hover:opacity-[0.8]
       "
    >
      {children}
    </button>
  );
};
