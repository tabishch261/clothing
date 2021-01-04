import { createSelector } from 'reselect';

const selectDirectory = state => state.directory; // function that gets state and return us state.directory

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);