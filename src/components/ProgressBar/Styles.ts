import {styled} from '@mui/material/styles';

export const ProgressBar = styled('div')(({ backgroundColor }: {backgroundColor: string}) => ({
  width: 75,
  height: 5,
  backgroundColor: backgroundColor,
  borderRadius: 30,
  transition: "background-color 0.3s",
}));