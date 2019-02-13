export const CLEAR_TAGS = 'CLEAR_TAGS';
export const clearTags = () => {
    return {
        type: CLEAR_TAGS,
        tags: [],
    };
};

export const ADD_TAG = 'ADD_TAG';
export const addTag = (tag) => {
  return {
      type: ADD_TAG,
      tag,
  }
};

export const REMOVE_TAG = 'REMOVE_TAG';
export const removeTag = (tag) => {
    return {
        type: REMOVE_TAG,
        tag,
    };
};
