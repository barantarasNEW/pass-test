import { createPortal } from 'react-dom';
import { LoaderBlock } from './Styles';

const Loader = () => {
  return (
    <>
      {createPortal(
        <LoaderBlock />,
        document.getElementById('portal') as HTMLElement
      )}
    </>
  );
};

export default Loader;