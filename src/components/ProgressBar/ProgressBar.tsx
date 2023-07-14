import { Stack } from '@mui/material';
import {ProgressBar as ProgressBarStyled} from './Styles';

type Props = {
  colors: string[];
};

const ProgressBar: React.FC<Props> = ({ colors }) => {
  return (
    <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
        <ProgressBarStyled backgroundColor={colors[0]} />
        <ProgressBarStyled backgroundColor={colors[1]} />
        <ProgressBarStyled backgroundColor={colors[2]} />
    </Stack>
  );
};

export default ProgressBar;