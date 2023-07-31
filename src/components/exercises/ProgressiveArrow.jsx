import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';

const ProgressiveArrow = ({ progression }) => {
  if (progression > 0) {
    return (
      <div className='text-green-400 text-xs'>
        <CallMadeOutlinedIcon className='text-xs' />
      </div>
    );
  }

  return (
    <div className='text-red-500'>
      <SouthEastOutlinedIcon />
    </div>
  );
};

export default ProgressiveArrow;
