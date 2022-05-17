const ArrowRight = (props) => {
  return (
    <svg
      width='18'
      height='23'
      className={`w-3 2xl:w-4 ${props.disabled ? 'opacity-40' : ''}`}
      id='right'
      onClick={props.onClick}
      viewBox='0 0 18 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 1L15 11.3158L1 21.6316' stroke='#232323' strokeWidth='2.4' />
    </svg>
  );
};

export default ArrowRight;
