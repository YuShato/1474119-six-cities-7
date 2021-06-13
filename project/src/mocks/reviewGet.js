import { nanoid } from 'nanoid';
import { ID_MAX_LENGTH } from '../components/consts/consts';


const reviewGet = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2019-05-08T14:13:56.569Z',
    'id': nanoid(ID_MAX_LENGTH),
    'rating': 4,
    'user': {
      'avatar_url': 'img/avatar-max.jpg',
      'id': nanoid(ID_MAX_LENGTH),
      'is_pro': false,
      'name': 'Max',
    },
  },
];

export default reviewGet;
