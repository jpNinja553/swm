import { MAX_TEASER_CHAR } from '@/src/helpers/constants';
import truncateString from '@/src/lib/truncateString';

export default function (str: string) {
  return truncateString(str, MAX_TEASER_CHAR);
}
