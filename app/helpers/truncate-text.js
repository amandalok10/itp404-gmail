import { helper } from '@ember/component/helper';

export function truncateText(params, namedArgs) {
  let message = params[0];
  let limit = namedArgs.limit;
  if (message.length > limit) {
    var shortText = message.substring(0, limit) + " ... ";
    return shortText;
  } else {
    return message;
  }
}


export default helper(truncateText);
