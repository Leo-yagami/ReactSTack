import { useEffect } from 'react';

const DynamicTitle = ({ title, dividerSrc }) => {
  useEffect(() => {
    const titleElement = document.getElementById('dynamic-title');
    const dividerElement = document.getElementById('dynamic-divider');

    if (titleElement && dividerElement) {
      const titleWidth = titleElement.offsetWidth;
      dividerElement.style.width = `${titleWidth * 0.8}px`;
    }
  }, [title]); // Recalculate whenever the title changes

  return (
    <div className='mt-8 w-fit flex flex-col items-center justify-center mx-auto'>
      <h1
        id="dynamic-title"
        className='text-[#F6670B] text-8xl font-bold font-Arvo text-bold text-center'
      >
        {title}
      </h1>
      <img
        id="dynamic-divider"
        src={dividerSrc}
        className='h-1 mt-4'
        alt=""
      />
    </div>
  );
};

export default DynamicTitle;
