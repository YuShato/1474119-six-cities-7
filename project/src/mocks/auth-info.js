import { nanoid } from 'nanoid';
import { ID_MAX_LENGTH } from '../components/consts/consts';

const AuthInfo = [
  {
    'avatar_url': 'img/1.png',
    'email': 'Oliver.conner@gmail.com',
    'id': nanoid(ID_MAX_LENGTH),
    'is_pro': false,
    'name': 'Oliver.conner',
    'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  },
];

export default AuthInfo;
