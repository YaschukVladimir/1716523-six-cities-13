import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getErrorMessage } from '../../store/app-process/selectors';
import './error-message.css';

function ErrorMessage(): React.JSX.Element | null {
  const error = useAppSelector(getErrorMessage);

  return (error) ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;
